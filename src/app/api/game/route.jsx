import { getDatabase, ref, push, set, update, remove, get, goOffline, goOnline } from "firebase/database";
import { rtdb } from "@/lib/firebase"; // Import the initialized instance

let disconnectTimeout = null;
const DISCONNECT_DELAY = 30000; // 30 seconds

function scheduleDisconnect() {
  if (disconnectTimeout) {
    clearTimeout(disconnectTimeout);
  }
  disconnectTimeout = setTimeout(() => {
    console.log('Going offline to preserve simultaneous connections');
    goOffline(rtdb); // Disconnect after inactivity
  }, DISCONNECT_DELAY);
}

function ensureOnline() {
  if (disconnectTimeout) {
    clearTimeout(disconnectTimeout); // Cancel disconnect if it was scheduled
  }
  goOnline(rtdb); // Ensure connection is online before any database operation
}

// GET: Fetch data by ID and increment view count
export async function GET(req, res) {
  ensureOnline(); // Make sure Firebase is connected before operation
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  try {
    if (id) {
      const gameRef = ref(rtdb, `ArcadeHub/games/${id}`);
      const snapshot = await get(gameRef);

      if (snapshot.exists()) {
        const gameData = snapshot.val();
        const newViewCount = (gameData.view || 0) + 1;
        await update(gameRef, { view: newViewCount });

        return new Response(JSON.stringify({ id, ...gameData, view: newViewCount }), { status: 200 });
      } else {
        return new Response(JSON.stringify([]), { status: 404 });
      }
    } else {
      const gamesRef = ref(rtdb, 'ArcadeHub/games');
      const snapshot = await get(gamesRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const dataArray = Object.entries(data).map(([id, item]) => ({ id, ...item }));
        return new Response(JSON.stringify(dataArray), { status: 200 });
      } else {
        return new Response(JSON.stringify([]), { status: 200 });
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), { status: 500 });
  } finally {
    scheduleDisconnect(); // Schedule disconnection after inactivity
  }
}

// POST: Add new data
export async function POST(req, res) {
  ensureOnline(); // Make sure Firebase is connected before operation
  try {
    const data = await req.json();
    data["date"] = new Date().toISOString();
    const gamesRef = ref(rtdb, 'ArcadeHub/games/' + data.metaUrl);
    await set(gamesRef, { ...data, view: 0 });
    return new Response(JSON.stringify({ id: data.metaUrl, message: "Data added successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error adding data:", error);
    return new Response(JSON.stringify({ error: "Failed to add data" }), { status: 500 });
  } finally {
    scheduleDisconnect(); // Schedule disconnection after inactivity
  }
}

// DELETE: Remove data by ID
export async function DELETE(req, res) {
  ensureOnline(); // Make sure Firebase is connected before operation
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required in query parameters" }), { status: 400 });
    }

    const gameRef = ref(rtdb, `ArcadeHub/games/${id}`);
    await remove(gameRef);

    return new Response(JSON.stringify({ message: "Data deleted successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error deleting data:", error);
    return new Response(JSON.stringify({ error: "Failed to delete data" }), { status: 500 });
  } finally {
    scheduleDisconnect(); // Schedule disconnection after inactivity
  }
}

// PUT: Update data by ID
export async function PUT(req, res) {
  ensureOnline(); // Make sure Firebase is connected before operation
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const data = await req.json();

    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required in query parameters" }), { status: 400 });
    }

    if (typeof data !== 'object' || data === null) {
      return new Response(JSON.stringify({ error: "Invalid data format" }), { status: 400 });
    }

    const gameRef = ref(rtdb, `ArcadeHub/games/${id}`);
    await update(gameRef, data);

    const updatedSnapshot = await get(gameRef);
    const updatedData = updatedSnapshot.val();

    return new Response(JSON.stringify({ message: "Data updated successfully", updatedData }), { status: 200 });
  } catch (error) {
    console.error("Error updating data:", error);
    return new Response(JSON.stringify({ error: "Failed to update data" }), { status: 500 });
  } finally {
    scheduleDisconnect(); // Schedule disconnection after inactivity
  }
}

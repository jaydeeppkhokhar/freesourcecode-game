import { getDatabase, ref, push, set, update, remove, get } from "firebase/database";
import { app } from "@/lib/firebase";

// GET: Fetch data by ID and increment view count
export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  try {
    const db = getDatabase(app);
    
    if (id) {
      // Search by ID if provided
      const gameRef = ref(db, `pokix/category/${id}`);
      const snapshot = await get(gameRef);

      if (snapshot.exists()) {
        const gameData = snapshot.val();
        
        // Increment the view count by 1
        const newViewCount = (gameData.view || 0) + 1;
        await update(gameRef, { view: newViewCount });

        return new Response(JSON.stringify({ id, ...gameData, view: newViewCount }), { status: 200 });
      } else {
        return new Response(JSON.stringify({ message: "Data not found" }), { status: 404 });
      }
    } else {
      // Fetch all data if no ID is provided
      const gamesRef = ref(db, 'pokix/category');
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
  }
}

// POST: Add new data
export async function POST(req, res) {
  try {
    const db = getDatabase(app);
    const data = await req.json();
    data["date"] = new Date().toISOString();
    const gamesRef = ref(db, 'pokix/category');
    const newGameRef = push(gamesRef); // Generate a new unique key
    await set(newGameRef, { ...data, view: 0 }); // Initialize view count to 0
    return new Response(JSON.stringify({ id: newGameRef.key, message: "Data added successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error adding data:", error);
    return new Response(JSON.stringify({ error: "Failed to add data" }), { status: 500 });
  }
}

// DELETE: Remove data by ID
// DELETE: Remove data by ID
export async function DELETE(req, res) {
  try {
    // Extract ID from the query parameters
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id'); // Get the ID from the query string

    // Check if ID is provided
    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required in query parameters" }), { status: 400 });
    }

    const db = getDatabase(app);
    const gameRef = ref(db, `pokix/category/${id}`);
    
    // Remove the item from Firebase
    await remove(gameRef);
    
    return new Response(JSON.stringify({ message: "Data deleted successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error deleting data:", error);
    return new Response(JSON.stringify({ error: "Failed to delete data" }), { status: 500 });
  }
}

// PUT: Update data by ID using searchParams
// PUT: Update data by ID using searchParams
// PUT: Update data by ID using searchParams
export async function PUT(req, res) {
  try {
    // Extract ID from the query parameters
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id'); // Get the ID from the query string

    // Extract the data from the request body
    const data = await req.json(); // Assumes data is sent in the request body

    // Check if ID is provided
    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required in query parameters" }), { status: 400 });
    }

    // Ensure the data is a valid object
    if (typeof data !== 'object' || data === null) {
      return new Response(JSON.stringify({ error: "Invalid data format" }), { status: 400 });
    }

    const db = getDatabase(app);
    const gameRef = ref(db, `pokix/category/${id}`);

    // Log the reference path and data for debugging
    console.log("Updating path:", `pokix/category/${id}`);
    console.log("Data to update:", data);

    // Perform the update
    await update(gameRef, data);

    // Fetch the updated data to verify the update
    const updatedSnapshot = await get(gameRef);
    const updatedData = updatedSnapshot.val();

    // Log the updated data
    console.log("Updated data from Firebase:", updatedData);

    return new Response(JSON.stringify({ message: "Data updated successfully", updatedData }), { status: 200 });
  } catch (error) {
    console.error("Error updating data:", error);
    return new Response(JSON.stringify({ error: "Failed to update data" }), { status: 500 });
  }
}



import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "app/data/freelance-projects.json");

async function readData() {
  try {
    const data = await fs.readFile(DATA_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading JSON data:", error);
    return [];
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const projects = await readData();
    const project = projects.find(p => p.id === id || p._id === id);
    
    if (!project) {
        return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }
    
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching project", error: error.message }, { status: 500 });
  }
}

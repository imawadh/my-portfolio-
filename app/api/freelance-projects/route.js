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

async function writeData(data) {
  try {
    await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing JSON data:", error);
    throw new Error("Could not save review");
  }
}

export async function GET() {
  try {
    const projects = await readData();
    // Sort by date descending
    const sortedProjects = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));
    return NextResponse.json(sortedProjects);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching projects", error: error.message }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const { projectId, email, reviewText, rating, clientName, clientDesignation } = await req.json();

    const projects = await readData();
    const index = projects.findIndex(p => p.id === projectId || p._id === projectId);

    if (index === -1) {
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }

    const project = projects[index];

    if (project.isReviewed) {
      return NextResponse.json({ message: "Project has already been reviewed" }, { status: 400 });
    }

    if (project.authorizedEmail !== email) {
      return NextResponse.json({ message: "Invalid email for this project" }, { status: 403 });
    }

    // Update the project
    projects[index] = {
      ...project,
      reviewText,
      rating,
      clientName,
      clientDesignation,
      isReviewed: true,
      date: new Date().toISOString()
    };

    await writeData(projects);

    return NextResponse.json({ message: "Review submitted successfully!", project: projects[index] });
  } catch (error) {
    return NextResponse.json({ message: "Error submitting review", error: error.message }, { status: 500 });
  }
}

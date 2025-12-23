import dbConnect from "@/app/lib/mongodb";
import FreelanceProject from "@/app/models/FreelanceProject";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await dbConnect();
    const projects = await FreelanceProject.find({}).sort({ date: -1 });
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching projects", error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const { title, websiteUrl, githubUrl, authorizedEmail } = await req.json();
    
    // Check if it already exists
    const existing = await FreelanceProject.findOne({ authorizedEmail });
    if (existing) {
        return NextResponse.json({ message: "Project or Email already exists" }, { status: 400 });
    }

    const project = await FreelanceProject.create({
      title,
      websiteUrl,
      githubUrl,
      authorizedEmail,
    });
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating project", error: error.message }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    await dbConnect();
    const { projectId, email, reviewText, rating, clientName, clientDesignation } = await req.json();

    const project = await FreelanceProject.findById(projectId);

    if (!project) {
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }

    if (project.isReviewed) {
      return NextResponse.json({ message: "Project has already been reviewed" }, { status: 400 });
    }

    if (project.authorizedEmail !== email) {
      return NextResponse.json({ message: "Invalid email for this project" }, { status: 403 });
    }

    project.reviewText = reviewText;
    project.rating = rating;
    project.clientName = clientName;
    project.clientDesignation = clientDesignation;
    project.isReviewed = true;
    project.date = new Date();

    await project.save();

    return NextResponse.json({ message: "Review submitted successfully!", project });
  } catch (error) {
    return NextResponse.json({ message: "Error submitting review", error: error.message }, { status: 500 });
  }
}

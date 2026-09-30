"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Textarea,
} from "@/components/ui";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  const [projects, setProjects] = useState<
    { id: number; name: string; description: string }[]
  >([]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    router.push("/user");
  }

  return (
    <main className="mx-auto w-full max-w-6xl p-6">
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>Manage your projects here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger render={<Button />}>New project</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create a project</DialogTitle>
                <DialogDescription>
                  Add a name and an optional description for your project.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-name">Project name</Label>
                  <Input
                    id="project-name"
                    name="name"
                    placeholder="Website redesign"
                    required
                    autoFocus
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-description">Description</Label>
                  <Textarea
                    id="project-description"
                    name="description"
                    placeholder="What is this project about?"
                    rows={3}
                  />
                </div>
                <DialogFooter>
                  <DialogClose render={<Button variant="outline" />}>
                    Cancel
                  </DialogClose>
                  <Button type="submit">Create project</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </main>
  );
}
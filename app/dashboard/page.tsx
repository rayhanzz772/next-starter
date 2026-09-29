import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl p-6">
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>Manage your projects here.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>New project</Button>
        </CardContent>
      </Card>
    </main>
  );
}
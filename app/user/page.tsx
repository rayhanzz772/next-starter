"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", role: "User" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "Admin" },
];

export default function UsersPage() {
  return (
    <main className="mx-auto w-full max-w-6xl p-6">
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>Manage user accounts and access roles.</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <Table className="min-w-[540px]">
            <TableHeader className="bg-muted/50">
              <TableRow className="hover:bg-transparent">
                <TableHead scope="col" className="w-20 text-xs font-semibold text-muted-foreground">ID</TableHead>
                <TableHead scope="col" className="text-xs font-semibold text-muted-foreground">Name</TableHead>
                <TableHead scope="col" className="text-xs font-semibold text-muted-foreground">Email</TableHead>
                <TableHead scope="col" className="text-xs font-semibold text-muted-foreground">Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">{user.id}</TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell className="text-muted-foreground">{user.email}</TableCell>
                  <TableCell>
                    <span className="inline-flex rounded-sm border px-2 py-0.5 text-xs font-medium">
                      {user.role}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
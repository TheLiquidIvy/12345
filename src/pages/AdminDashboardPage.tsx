
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Link } from "react-router-dom";

function AdminDashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome, {user?.email}</p>
          </div>
          <Button onClick={logout} variant="destructive">Logout</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Content Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage blog posts and portfolio items with the WYSIWYG editor.</p>
              <Button asChild className="mt-4">
                <Link to="/admin/cms">Open CMS</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>View your portfolio projects.</p>
              <Button asChild className="mt-4" variant="outline">
                <Link to="/portfolio">Go to Portfolio</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Blog Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>View your blog posts.</p>
              <Button asChild className="mt-4" variant="outline">
                <Link to="/blog">Go to Blog</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage;

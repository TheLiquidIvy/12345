
import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from '@/hooks/use-toast';

// Mock data for subscribers
const mockSubscribers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    status: 'subscribed',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    status: 'subscribed',
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: 'Peter Jones',
    email: 'peter.jones@example.com',
    status: 'unsubscribed',
    createdAt: new Date().toISOString(),
  },
];

function SubscribersPage() {
  const [subscribers, setSubscribers] = useState(mockSubscribers);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  // Simulate fetching subscribers from an API
  useEffect(() => {
    // In a real application, you would fetch this data from your backend
    setSubscribers(mockSubscribers);
  }, []);

  const handleAddSubscriber = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newSubscriber = {
      id: subscribers.length + 1,
      name,
      email,
      status: 'subscribed' as const,
      createdAt: new Date().toISOString(),
    };

    setSubscribers([...subscribers, newSubscriber]);

    toast({
      title: 'Subscriber Added',
      description: `${name} has been added to the newsletter.`,
    });

    setOpen(false);
    setName('');
    setEmail('');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Subscribers</h1>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>Add Subscriber</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Subscriber</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddSubscriber}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="col-span-3"
                      placeholder="Subscriber Name"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="col-span-3"
                      placeholder="subscriber@email.com"
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Add Subscriber</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Subscribed At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscribers.map((subscriber) => (
                <TableRow key={subscriber.id}>
                  <TableCell>{subscriber.name}</TableCell>
                  <TableCell>{subscriber.email}</TableCell>
                  <TableCell>{subscriber.status}</TableCell>
                  <TableCell>{new Date(subscriber.createdAt).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}

export default SubscribersPage;

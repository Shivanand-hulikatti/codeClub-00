import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const LandingPage = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Question of the Day</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center mb-4">
          Ft. code club KLE Technological University Hubli
        </p>
        <div className="space-y-4">
          <Button variant="primary" className="w-full">
            Register Now
          </Button>
          <Button variant="secondary" className="w-full">
            Login Now
          </Button>
        </div>
      </CardContent>
      <CardContent>
        <h3 className="text-lg font-medium mb-2">About Us</h3>
        <p className="text-sm text-gray-500">
          blah blah ab ojhands vjbdiu vbdylvhvbv
        </p>
      </CardContent>
      <CardContent>
        <h3 className="text-lg font-medium mb-2">Follow Us</h3>
        <div className="flex justify-center space-x-4">
          <a href="#" className="rounded-full p-2 hover:bg-gray-100">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="rounded-full p-2 hover:bg-gray-100">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="rounded-full p-2 hover:bg-gray-100">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default LandingPage;
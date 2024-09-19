import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Bookmark, Calendar, Clock, MapPin, Search } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Trainings and Programs</h1>
          <div className="flex gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input type="search" placeholder="Search" className="pl-10 w-full" />
            </div>
            <Select>
              <option>Sort By</option>
            </Select>
            <Button variant="outline" size="icon">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 space-y-6">
            <div>
              <h2 className="font-semibold mb-2">Category/Topic</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="conflict-management" />
                  <label htmlFor="conflict-management" className="ml-2">Conflict Management</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="legal-compliance" />
                  <label htmlFor="legal-compliance" className="ml-2">Legal Compliance</label>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold mb-2">Institution</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="hrm-department" />
                  <label htmlFor="hrm-department" className="ml-2">HRM Department (Strategic Human Resource Unit)</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="other" />
                  <label htmlFor="other" className="ml-2">Other</label>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold mb-2">Target Participants</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="department-heads" />
                  <label htmlFor="department-heads" className="ml-2">Department Heads</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="hr-officers" />
                  <label htmlFor="hr-officers" className="ml-2">HR Officers</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="administrative-officers" />
                  <label htmlFor="administrative-officers" className="ml-2">Administrative Officers</label>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold mb-2">Duration</h2>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div>
              <h2 className="font-semibold mb-2">Mode of Learning</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="online" />
                  <label htmlFor="online" className="ml-2">Online</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="in-person" />
                  <label htmlFor="in-person" className="ml-2">In-person</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="hybrid" />
                  <label htmlFor="hybrid" className="ml-2">Hybrid</label>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold mb-2">Availability</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="archived" />
                  <label htmlFor="archived" className="ml-2">Archived</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="available-now" />
                  <label htmlFor="available-now" className="ml-2">Available now</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="upcoming" />
                  <label htmlFor="upcoming" className="ml-2">Upcoming</label>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex-grow grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(9)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>Title</CardTitle>
                  <p className="text-sm text-gray-500">by Resource Person</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">Start Date</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">Duration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">Location</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Mode</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Register Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 gap-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <span>...</span>
          <Button variant="outline" size="sm">
            67
          </Button>
          <Button variant="outline" size="sm">
            68
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-300"></div>
              <div>
                <h2 className="font-bold">Quezon City Government</h2>
                <p>Human Resource</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="font-semibold">Discover and advance your skills</p>
              <p>in the Learning and Development.</p>
              <div className="flex justify-center md:justify-end gap-4 mt-2">
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  Facebook
                </Link>
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  Twitter
                </Link>
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  Instagram
                </Link>
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center md:text-right">
            <p>Elliptical Road, Bray, Central, Diliman, Quezon City</p>
            <p>HRMD@quezoncity.gov.ph</p>
            <p>SHRU@quezoncity.gov.ph</p>
            <p>89884242 loc. 8504</p>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            © 2022 Quezon City Human Resource
          </div>
        </div>
      </footer>
    </div>
  )
}
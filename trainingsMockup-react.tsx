import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Bookmark, Calendar, Clock, MapPin, Search } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          width={1200}
          height={400}
          alt="Training session"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
          <h1 className="text-4xl font-bold text-white mb-4">Training and Programs</h1>
          <div className="flex gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input type="search" placeholder="Search" className="pl-10 w-full bg-white" />
            </div>
            <Select className="bg-white">
              <option>Sort By</option>
            </Select>
            <Button variant="outline" size="icon" className="bg-white">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 space-y-6">
            <div>
              <h2 className="font-semibold mb-2">Availability</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="registered" />
                  <label htmlFor="registered" className="ml-2">Registered</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="closed" />
                  <label htmlFor="closed" className="ml-2">Closed</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="upcoming" />
                  <label htmlFor="upcoming" className="ml-2">Upcoming</label>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold mb-2">Category/Topic</h2>
              <div className="space-y-2">
                <div>Conflict Management</div>
                <div>Legal Compliance</div>
                <div>Conflict Management</div>
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
              <div className="text-sm text-gray-500 mt-1">xx - xx hours</div>
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
          </aside>
          <div className="flex-grow grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(9)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      width={400}
                      height={200}
                      alt="Training session"
                      className="w-full h-[150px] object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold py-1 px-2 text-sm">
                      BATCH 3
                    </div>
                    <div className="absolute bottom-0 left-0 bg-green-600 text-white font-bold py-1 px-2 text-sm">
                      MASTERING
                    </div>
                    <div className="absolute top-2 left-2">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        width={50}
                        height={50}
                        alt="Logo"
                        className="w-12 h-12"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Title</h3>
                  <p className="text-sm text-gray-500 mb-2">by Resource Person</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Start Date</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Duration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Location</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Mode</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-800 hover:bg-blue-700">Register Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 gap-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-blue-800 text-white">
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

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                width={80}
                height={80}
                alt="Quezon City Logo"
                className="w-16 h-16"
              />
              <div>
                <h2 className="font-bold">Quezon City Government</h2>
                <p>Human Resource</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="font-semibold">Discover and advance your skills</p>
              <p>in the Learning and Development.</p>
              <div className="flex justify-center md:justify-end gap-4 mt-2">
                <Button variant="ghost" size="sm">Facebook</Button>
                <Button variant="ghost" size="sm">Twitter</Button>
                <Button variant="ghost" size="sm">Instagram</Button>
                <Button variant="ghost" size="sm">LinkedIn</Button>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center md:text-right">
            <p>Elliptical Road, Bray, Central, Diliman, Quezon City</p>
            <p>HRMD@quezoncity.gov.ph</p>
            <p>SHRU@quezoncity.gov.ph</p>
            <p>89884242 loc. 8504</p>
          </div>
          <div className="mt-4 text-center text-sm">
            © 2022 Quezon City Human Resource
          </div>
        </div>
      </footer>
    </div>
  )
}
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select } from "@/components/ui/select"
import { Bookmark, Calendar, Clock, MapPin, Search } from "lucide-react"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative h-64 bg-blue-900">
        <Image
          src="/placeholder.svg?height=256&width=1920"
          alt="Training session"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-blue-900 to-transparent">
          <h1 className="text-4xl font-bold text-white mb-4">Training and Programs</h1>
          <div className="flex gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input type="search" placeholder="Search" className="pl-10 w-full bg-white" />
            </div>
            <Select>
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
                <div className="relative h-40">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Training session"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-400 text-blue-900 px-2 py-1 text-sm font-bold">
                    BATCH 3
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-green-600 text-white px-2 py-1 text-center font-bold">
                    MASTERING
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="absolute -mt-12 ml-4">
                    <div className="w-16 h-16 bg-red-600 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Logo"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                  <h3 className="font-bold mt-6">Title</h3>
                  <p className="text-sm text-gray-500">by Resource Person</p>
                  <div className="mt-4 space-y-2 text-sm">
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
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">Register Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 gap-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-blue-900 text-white">
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
                src="/placeholder.svg?height=64&width=64"
                alt="Quezon City Logo"
                width={64}
                height={64}
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
                <a href="#" className="hover:text-gray-300">Facebook</a>
                <a href="#" className="hover:text-gray-300">Twitter</a>
                <a href="#" className="hover:text-gray-300">Instagram</a>
                <a href="#" className="hover:text-gray-300">LinkedIn</a>
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
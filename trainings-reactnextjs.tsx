import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bookmark } from "lucide-react"

const trainingPrograms = [
  {
    title: "Conflict Management Workshop",
    resourcePerson: "Dr. Jane Smith",
    startDate: "2023-09-15",
    duration: "8 hours",
    location: "Main Conference Room",
    mode: "In-person",
  },
  // Add more training programs here...
]

export default function TrainingsAndPrograms() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Trainings and Programs</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex-1 mr-4">
            <Input type="search" placeholder="Search" className="w-full" />
          </div>
          <Select>
            <option>Sort By</option>
            <option>Date</option>
            <option>Title</option>
          </Select>
          <Button variant="outline" className="ml-2">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-64 bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Filters</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Category/Topic</h3>
                <div className="space-y-2">
                  <Checkbox label="Conflict Management" />
                  <Checkbox label="Legal Compliance" />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Institution</h3>
                <div className="space-y-2">
                  <Checkbox label="HRM Department" />
                  <Checkbox label="Other" />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Target Participants</h3>
                <div className="space-y-2">
                  <Checkbox label="Department Heads" />
                  <Checkbox label="HR Officers" />
                  <Checkbox label="Administrative Officers" />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Duration</h3>
                <Input type="range" min="0" max="100" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Mode of Learning</h3>
                <div className="space-y-2">
                  <Checkbox label="Online" />
                  <Checkbox label="In-person" />
                  <Checkbox label="Hybrid" />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Availability</h3>
                <div className="space-y-2">
                  <Checkbox label="Archived" />
                  <Checkbox label="Available now" />
                  <Checkbox label="Upcoming" />
                </div>
              </div>
            </div>
          </aside>
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingPrograms.map((program, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{program.title}</CardTitle>
                    <p className="text-sm text-gray-500">by {program.resourcePerson}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Start Date:</span>
                        <span>{program.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span>{program.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mode:</span>
                        <span>{program.mode}</span>
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
        </div>
        <div className="mt-8 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <Button variant="outline">Previous</Button>
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">...</Button>
            <Button variant="outline">67</Button>
            <Button variant="outline">68</Button>
            <Button variant="outline">Next</Button>
          </nav>
        </div>
      </main>
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quezon City Government Human Resource</h3>
              <p className="text-sm text-gray-600">© 2023 Quezon City Human Resource</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Discover and advance your skills</h3>
              <p className="text-sm text-gray-600">in the Learning and Development.</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <p className="text-sm text-gray-600">Elliptical Road, Bray, Central, Diliman, Quezon City</p>
              <p className="text-sm text-gray-600">HRMDl@quezoncity.gov.ph</p>
              <p className="text-sm text-gray-600">SHRU@quezoncity.gov.ph</p>
              <p className="text-sm text-gray-600">89884242 loc. 8504</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
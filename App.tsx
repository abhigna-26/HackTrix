import { useState } from "react"
import { LoginSignup } from "./components/LoginSignup"
import { WasteHeader } from "./components/WasteHeader"
import { WasteNavigation } from "./components/WasteNavigation"
import { UnifiedDashboard } from "./components/UnifiedDashboard"
import { WasteMarketplace } from "./components/WasteMarketplace"
import { TrafficSimulation } from "./components/TrafficSimulation"
import { InteractiveMapSimulation } from "./components/InteractiveMapSimulation"
import { GovernmentTrafficDashboard } from "./components/GovernmentTrafficDashboard"
import { SustainabilityScore } from "./components/SustainabilityScore"
import { GovernmentDashboard } from "./components/GovernmentDashboard"
import { SecureTransaction } from "./components/SecureTransaction"
import { UnifiedReports } from "./components/UnifiedReports"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Badge } from "./components/ui/badge"
import { 
  BarChart3, 
  FileText, 
  Download,
  TrendingUp,
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Database,
  Activity
} from "lucide-react"

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState('')
  const [userData, setUserData] = useState<any>(null)

  // Mock data for the platform
  const notifications = 5

  const handleLogin = (role: string, user: any) => {
    setUserRole(role)
    setUserData(user)
    setIsLoggedIn(true)
    setActiveTab('home')
  }

  const ReportsContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            Analytics & Reports Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-green-200">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Waste Flow Analytics</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Track waste streams and recycling efficiency across your operations
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Performance Metrics</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Monitor key performance indicators and sustainability goals
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Metrics
                </Button>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardContent className="p-6 text-center">
                <Activity className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Custom Reports</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Generate detailed reports for compliance and stakeholder updates
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Activity className="h-4 w-4 mr-2" />
                  Create Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: 'Q4 2024 Sustainability Report',
                type: 'Sustainability',
                date: '2024-01-15',
                status: 'Ready',
                size: '4.2 MB'
              },
              {
                title: 'Waste Stream Analysis - December',
                type: 'Analytics',
                date: '2024-01-10',
                status: 'Processing',
                size: '2.8 MB'
              },
              {
                title: 'Carbon Impact Assessment',
                type: 'Environmental',
                date: '2024-01-05',
                status: 'Ready',
                size: '3.1 MB'
              },
              {
                title: 'Partnership Performance Review',
                type: 'Business',
                date: '2024-01-01',
                status: 'Ready',
                size: '1.9 MB'
              }
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex-1">
                  <h4 className="font-medium">{report.title}</h4>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                    <Badge variant="outline">{report.type}</Badge>
                    <span>{report.date}</span>
                    <span>{report.size}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={report.status === 'Ready' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                    {report.status}
                  </Badge>
                  {report.status === 'Ready' && (
                    <Button size="sm" variant="outline">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Builder */}
      <Card>
        <CardHeader>
          <CardTitle>Custom Report Builder</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Report Type</label>
              <select className="w-full p-2 border rounded-md">
                <option>Sustainability Dashboard</option>
                <option>Waste Flow Analysis</option>
                <option>Carbon Footprint</option>
                <option>Financial Impact</option>
                <option>Compliance Report</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Time Period</label>
              <select className="w-full p-2 border rounded-md">
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>Last 6 months</option>
                <option>Last year</option>
                <option>Custom range</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Format</label>
              <select className="w-full p-2 border rounded-md">
                <option>PDF Report</option>
                <option>Excel Spreadsheet</option>
                <option>CSV Data</option>
                <option>Interactive Dashboard</option>
              </select>
            </div>
          </div>
          <Button className="mt-4 bg-gradient-to-r from-green-600 to-blue-600">
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </CardContent>
      </Card>
    </div>
  )

  const SettingsContent = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Profile & Company Information
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Notification Preferences
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Privacy & Security Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Database className="h-4 w-4 mr-2" />
                Data Management
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SettingsIcon className="h-5 w-5" />
              Platform Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="h-4 w-4 mr-2" />
                Dashboard Preferences
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Transaction Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Activity className="h-4 w-4 mr-2" />
                AI Recommendation Tuning
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Database className="h-4 w-4 mr-2" />
                Integration Management
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Subscription & Billing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Current Plan</h4>
              <div className="text-2xl font-bold text-green-600 mb-2">Enterprise</div>
              <p className="text-sm text-muted-foreground mb-4">
                Advanced analytics, unlimited transactions, priority support
              </p>
              <div className="text-sm">
                <div className="flex justify-between mb-1">
                  <span>Monthly Fee:</span>
                  <span className="font-semibold">$299/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Billing:</span>
                  <span>Feb 15, 2024</span>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Usage Statistics</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Transactions:</span>
                  <span>47 / ∞</span>
                </div>
                <div className="flex justify-between">
                  <span>Storage:</span>
                  <span>2.4GB / 50GB</span>
                </div>
                <div className="flex justify-between">
                  <span>API Calls:</span>
                  <span>15,247 / 100k</span>
                </div>
                <div className="flex justify-between">
                  <span>Users:</span>
                  <span>8 / 25</span>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Billing Actions</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full" size="sm">
                  <FileText className="h-3 w-3 mr-1" />
                  Download Invoice
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  Update Payment Method
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  Manage Subscription
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <UnifiedDashboard userRole={userRole} userData={userData} />
      case 'marketplace':
        return <WasteMarketplace />
      case 'traffic':
        return <TrafficSimulation />
      case 'interactive-map':
        return <InteractiveMapSimulation />
      case 'government-traffic':
        return <GovernmentTrafficDashboard />
      case 'sustainability':
        return <SustainabilityScore />
      case 'government':
        return <GovernmentDashboard />
      case 'transaction':
        return <SecureTransaction />
      case 'reports':
        return <UnifiedReports />
      case 'settings':
        return <SettingsContent />
      default:
        return <UnifiedDashboard userRole={userRole} userData={userData} />
    }
  }

  // Show login/signup page if not logged in
  if (!isLoggedIn) {
    return <LoginSignup onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <WasteHeader 
        notifications={notifications}
        userName={userData?.name || "User"}
        companyName={userData?.company || "Your Organization"}
      />
      
      <div className="flex">
        <WasteNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          notifications={2}
        />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}
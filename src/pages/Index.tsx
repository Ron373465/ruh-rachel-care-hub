
import { Calendar, Phone, Mail, MapPin, Clock, Award, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AppointmentForm from "@/components/AppointmentForm";
import TreatmentInfo from "@/components/TreatmentInfo";
import DoctorProfile from "@/components/DoctorProfile";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">RUH</h1>
              <p className="text-sm text-muted-foreground">Oncology Care</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#treatments" className="text-foreground hover:text-primary transition-colors">Treatments</a>
            <a href="#appointment" className="text-foreground hover:text-primary transition-colors">Appointment</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button className="hidden md:inline-flex">
            <Phone className="h-4 w-4 mr-2" />
            Emergency Contact
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            Specialized Oncology Care
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Compassionate Cancer Care
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Expert oncology treatment with Dr. Ruhamah Rachel Reju MBBS, MD. 
            Providing personalized cancer care with cutting-edge treatments and compassionate support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Calendar className="h-5 w-5 mr-2" />
              Book Appointment
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Learn About Treatments
            </Button>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <DoctorProfile />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <p className="text-muted-foreground">Patients Treated</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <p className="text-muted-foreground">Emergency Support</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">95%</div>
              <p className="text-muted-foreground">Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Information */}
      <section id="treatments" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <TreatmentInfo />
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Schedule Your Appointment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards your treatment. Schedule a consultation with Dr. Rachel today.
            </p>
          </div>
          <AppointmentForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-muted-foreground">
              We're here to help you on your journey to recovery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Emergency: +1 (555) 123-4567</p>
                <p className="text-muted-foreground">Office: +1 (555) 765-4321</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@ruhoncology.com</p>
                <p className="text-muted-foreground">appointments@ruhoncology.com</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">123 Medical Center Drive</p>
                <p className="text-muted-foreground">Suite 456, City, State 12345</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6" />
                <span className="text-xl font-bold">RUH Oncology</span>
              </div>
              <p className="text-primary-foreground/80">
                Providing compassionate and expert oncology care with Dr. Ruhamah Rachel Reju.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#treatments" className="hover:text-white transition-colors">Treatments</a></li>
                <li><a href="#appointment" className="hover:text-white transition-colors">Appointment</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Office Hours</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 2:00 PM</li>
                <li>Sunday: Emergency Only</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Emergency</h3>
              <p className="text-primary-foreground/80">
                For medical emergencies, call 911 or contact our 24/7 emergency line.
              </p>
              <p className="text-lg font-semibold">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 RUH Oncology Care. All rights reserved. | Dr. Ruhamah Rachel Reju MBBS, MD</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

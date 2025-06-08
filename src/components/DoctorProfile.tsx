
import { Award, BookOpen, Users, Heart, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DoctorProfile = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Meet Dr. Ruhamah Rachel Reju
        </h2>
        <p className="text-xl text-muted-foreground">
          MBBS, MD - Specialized Oncologist
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
              Board Certified Oncologist
            </Badge>
            <h3 className="text-2xl font-bold text-foreground">
              Dedicated to Compassionate Cancer Care
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Dr. Ruhamah Rachel Reju brings over a decade of specialized experience in oncology, 
              combining cutting-edge medical treatments with compassionate patient care. Her approach 
              focuses on treating not just the disease, but the whole person, ensuring each patient 
              receives personalized care tailored to their unique needs.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Qualifications & Expertise</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start space-x-2">
                <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>MBBS - Bachelor of Medicine, Bachelor of Surgery</span>
              </li>
              <li className="flex items-start space-x-2">
                <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>MD - Doctor of Medicine, Specialization in Oncology</span>
              </li>
              <li className="flex items-start space-x-2">
                <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Board Certified in Medical Oncology</span>
              </li>
              <li className="flex items-start space-x-2">
                <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Member of American Society of Clinical Oncology</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>Patient-Centered Approach</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Every treatment plan is personalized, considering not just the medical aspects 
                but also the emotional and social needs of patients and their families.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <Star className="h-6 w-6 text-primary mx-auto" />
                <CardTitle className="text-lg">500+</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">Patients Treated</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-2">
                <Award className="h-6 w-6 text-primary mx-auto" />
                <CardTitle className="text-lg">10+</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-center text-primary">Treatment Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground italic">
                "Every patient deserves hope, dignity, and the best possible care. 
                I am committed to walking alongside my patients and their families 
                throughout their cancer journey."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;

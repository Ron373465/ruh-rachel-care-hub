
import { Shield, Zap, Heart, Users, Microscope, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TreatmentInfo = () => {
  const treatments = [
    {
      icon: Microscope,
      title: "Chemotherapy",
      description: "Advanced chemotherapy protocols tailored to specific cancer types",
      details: "Systemic treatment using the latest chemotherapy drugs with minimized side effects and maximum efficacy."
    },
    {
      icon: Zap,
      title: "Radiation Therapy",
      description: "Precision radiation treatment with state-of-the-art technology",
      details: "Targeted radiation therapy that precisely targets cancer cells while preserving healthy tissue."
    },
    {
      icon: Shield,
      title: "Immunotherapy",
      description: "Cutting-edge immunotherapy to boost your body's natural defenses",
      details: "Harness your immune system to fight cancer with the latest immunotherapy treatments."
    },
    {
      icon: Activity,
      title: "Targeted Therapy",
      description: "Personalized molecular targeted treatments",
      details: "Treatments that target specific genes, proteins, or tissue environment that contribute to cancer growth."
    },
    {
      icon: Heart,
      title: "Palliative Care",
      description: "Comprehensive supportive care to improve quality of life",
      details: "Specialized medical care focused on providing relief from symptoms and stress of cancer."
    },
    {
      icon: Users,
      title: "Supportive Services",
      description: "Holistic care including counseling and nutrition support",
      details: "Complete care team including nutritionists, counselors, and support groups for patients and families."
    }
  ];

  const cancerTypes = [
    "Breast Cancer",
    "Lung Cancer", 
    "Colorectal Cancer",
    "Prostate Cancer",
    "Lymphoma",
    "Leukemia",
    "Ovarian Cancer",
    "Pancreatic Cancer",
    "Liver Cancer",
    "Brain Tumors"
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
          Comprehensive Cancer Care
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Advanced Cancer Treatments
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We offer comprehensive cancer treatment options using the latest medical advances 
          and evidence-based therapies, all delivered with compassionate care.
        </p>
      </div>

      <Tabs defaultValue="treatments" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="treatments">Treatment Options</TabsTrigger>
          <TabsTrigger value="cancer-types">Cancer Types We Treat</TabsTrigger>
        </TabsList>
        
        <TabsContent value="treatments" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <treatment.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{treatment.title}</CardTitle>
                  <CardDescription>{treatment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{treatment.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-center text-primary">Our Treatment Approach</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                We believe in a multidisciplinary approach to cancer care, combining the latest 
                medical treatments with emotional and psychological support for both patients and families.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">Personalized Treatment Plans</Badge>
                <Badge variant="secondary">24/7 Support</Badge>
                <Badge variant="secondary">Latest Technology</Badge>
                <Badge variant="secondary">Compassionate Care</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="cancer-types" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Cancer Types We Specialize In</h3>
              <div className="grid grid-cols-1 gap-3">
                {cancerTypes.map((cancer, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="font-medium">{cancer}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Early Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700">
                    We emphasize the importance of early detection and offer comprehensive 
                    screening programs for high-risk patients. Early detection significantly 
                    improves treatment outcomes and quality of life.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-orange-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800">Advanced Staging</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700">
                    For patients with advanced-stage cancers, we offer cutting-edge treatments 
                    including clinical trials and experimental therapies when appropriate.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800">Second Opinions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700">
                    We welcome patients seeking second opinions and provide thorough 
                    evaluations to ensure you receive the most appropriate treatment plan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TreatmentInfo;

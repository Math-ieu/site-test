import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, MapPin, Calendar, Users, Clock, Phone, Flag, TriangleAlert as AlertTriangle, MessageCircle, Euro, CircleCheck as CheckCircle, Globe } from "lucide-react";

const ParentProfile = () => {
  const { id } = useParams();

  // Données exemple pour un profil parent
  const parentProfile = {
    id: "1",
    name: "Nada",
    photo: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Nounou pour un enfant de 2ans scolarisé",
    searchType: "Nounou à plein temps",
    startDate: "04/09/2025",
    endDate: "Date indéterminée",
    childrenCount: 1,
    nationality: "Maroc",
    lastConnection: "02/09/2025",
    budget: "800 MAD / semaine",
    phone: "0660 ### ###",
    location: "Prestigia, Hay Riad, Rabat, Maroc - Rabat",
    requirements: [
      "Garde d'enfant au domicile de la nounou",
      "Souhaite une nounou couchante",
      "Préparer repas famille",
      "Ménage maison"
    ],
    description: `Nounou pour un enfant de 2ans scolarisé
S'occuper de l'enfant la matin pour l'habiller et lui donner le petit-dej S'occuper de l'enfant au retour de l'école à 16h30 pour donner le bain, le dîner et le faire dormir Passer la nuit avec bébé`,
    childrenAges: "1 à 3 ans",
    languages: ["Anglais", "Français"],
    schedule: {
      "Lundi": ["07:00-09:00", "16:30-22:00"],
      "Mardi": ["07:00-09:00", "16:30-22:00"],
      "Mercredi": ["07:00-09:00", "16:30-22:00"],
      "Jeudi": ["07:00-09:00", "16:30-22:00"],
      "Vendredi": ["07:00-09:00", "16:30-22:00"],
      "Samedi": ["08:00-20:00"],
      "Dimanche": ["08:00-20:00"]
    }
  };

  const timeSlots = ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"];
  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/parents" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux parents
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <Avatar className="h-32 w-32 mx-auto md:mx-0">
                    <AvatarImage src={parentProfile.photo} alt={parentProfile.name} />
                    <AvatarFallback className="text-2xl">{parentProfile.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold mb-2">{parentProfile.title}</h1>
                    <p className="text-lg text-muted-foreground mb-4">
                      Recherche: {parentProfile.searchType}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center justify-center md:justify-start">
                        <Calendar className="h-4 w-4 mr-2 text-nounou-blue" />
                        <span>Début: {parentProfile.startDate}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start">
                        <Calendar className="h-4 w-4 mr-2 text-nounou-pink" />
                        <span>Fin: {parentProfile.endDate}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start">
                        <Users className="h-4 w-4 mr-2 text-nounou-orange" />
                        <span>{parentProfile.childrenCount} enfant(s)</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start">
                        <Flag className="h-4 w-4 mr-2 text-nounou-blue" />
                        <span>Nationalité: {parentProfile.nationality}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Présentation de ce qu'il cherche</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                  {parentProfile.description}
                </p>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Compétences recherchées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {parentProfile.requirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Children Info */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Informations sur les enfants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Âge des enfants à garder</h4>
                  <Badge variant="secondary" className="bg-nounou-blue/10 text-nounou-blue">
                    {parentProfile.childrenAges}
                  </Badge>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Langue de communication</h4>
                  <div className="flex gap-2">
                    {parentProfile.languages.map((lang, index) => (
                      <Badge key={index} variant="outline" className="border-nounou-pink text-nounou-pink">
                        <Globe className="h-3 w-3 mr-1" />
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Planning hebdomadaire</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto -mx-2">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="border p-1 md:p-2 bg-muted text-left text-xs md:text-sm">Horaires</th>
                        {days.map(day => (
                          <th key={day} className="border p-1 md:p-2 bg-muted text-center min-w-[60px] md:min-w-[100px]">
                            <span className="hidden md:inline">{day}</span>
                            <span className="md:hidden">{day.slice(0, 3)}</span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {timeSlots.map(time => (
                        <tr key={time}>
                          <td className="border p-1 md:p-2 font-medium text-xs md:text-sm">{time}</td>
                          {days.map(day => {
                            const isActive = parentProfile.schedule[day]?.some(slot => {
                              const [start, end] = slot.split('-');
                              return time >= start && time < end;
                            });
                            return (
                              <td key={`${day}-${time}`} className="border p-1 md:p-2 text-center">
                                {isActive && (
                                  <div className="w-3 h-3 md:w-4 md:h-4 bg-nounou-blue rounded mx-auto"></div>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Location Map */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Localisation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0234567890123!2d-6.8498!3d33.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU4JzE3LjgiTiA2wrA1MCc1OS4zIlc!5e0!3m2!1sen!2sma!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation"
                  />
                </div>
                <p className="text-sm text-muted-foreground flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {parentProfile.location}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-lg mb-2">{parentProfile.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Dernière connexion: {parentProfile.lastConnection}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Button variant="outline" className="w-full">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Signaler
                  </Button>
                  
                  <Button className="w-full btn-gradient">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contacter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Budget */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Euro className="mr-2 h-5 w-5" />
                  Budget
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-2xl font-bold text-nounou-blue mb-2">
                    {parentProfile.budget}
                  </p>
                  <Button className="w-full btn-secondary">
                    Je postule
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{parentProfile.phone}</span>
                    <span className="text-xs text-muted-foreground ml-2">
                      (suite disponible après connexion)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Similar Profiles */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Annonces similaires</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>P{item}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">Parent {item}</p>
                        <p className="text-xs text-muted-foreground">Casablanca</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ParentProfile;
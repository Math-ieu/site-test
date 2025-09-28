import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, MapPin, Calendar, Star, Phone, Flag, TriangleAlert as AlertTriangle, MessageCircle, Euro, CircleCheck as CheckCircle, Globe, Shield, Mail, Facebook, GraduationCap, Users, Heart, Camera } from "lucide-react";

const NounouProfile = () => {
  const { id } = useParams();

  // Données exemple pour un profil nounou
  const nounouProfile = {
    id: "1",
    name: "Yassmine",
    firstName: "Yassmine",
    lastName: "Benali",
    photo: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300",
    title: "Nounou à la journée",
    age: 24,
    status: "Célibataire",
    availability: "23/06/2024",
    nationality: "Maroc",
    rating: 4.8,
    reviewCount: 12,
    tarif: "50 MAD / heure",
    phone: "0660 ### ###",
    location: "Casablanca - Maarif",
    skills: [
      "Je garde les enfants à mon domicile",
      "J'ai déjà gardé des enfants",
      "Je ne suis pas couchante",
      "J'ai mon permis de conduire"
    ],
    verifications: {
      identity: true,
      email: true,
      phone: true,
      facebook: true
    },
    description: `Nounou expérimentée et passionnée, je prends soin des enfants avec amour et bienveillance. 
J'ai une approche éducative basée sur le jeu et la créativité. Je suis très patiente et j'adore accompagner les enfants dans leur développement.`,
    experience: {
      "0-1 ans": "2 ans d'expérience",
      "1-3 ans": "5 ans d'expérience", 
      "3-6 ans": "4 ans d'expérience",
      "6+ ans": "3 ans d'expérience"
    },
    education: "Brevet",
    languages: ["Arabe", "Français", "Anglais"],
    formations: ["Formation premiers secours", "CAP Petite Enfance"],
    familyLife: "Je n'ai pas d'enfants",
    options: [
      "Disponible pour les vacances scolaires",
      "Disponible pour une mission de garde d'enfant la nuit",
      "Disponible pour me déplacer avec la famille en vacances",
      "Accepte de garder des enfants avec un handicap"
    ],
    schedule: {
      "Lundi": ["08:00-18:00"],
      "Mardi": ["08:00-18:00"],
      "Mercredi": ["08:00-18:00"],
      "Jeudi": ["08:00-18:00"],
      "Vendredi": ["08:00-18:00"],
      "Samedi": ["09:00-17:00"],
      "Dimanche": []
    },
    photos: [
      "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=300",
      "https://images.pexels.com/photos/8613268/pexels-photo-8613268.jpeg?auto=compress&cs=tinysrgb&w=300",
      "https://images.pexels.com/photos/8613271/pexels-photo-8613271.jpeg?auto=compress&cs=tinysrgb&w=300"
    ]
  };

  const timeSlots = ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];
  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/nounous" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux nounous
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
                    <AvatarImage src={nounouProfile.photo} alt={nounouProfile.name} />
                    <AvatarFallback className="text-2xl">{nounouProfile.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold mb-2">{nounouProfile.title}</h1>
                    <p className="text-lg text-muted-foreground mb-4">
                      Âge: {nounouProfile.age} ans, {nounouProfile.status}
                    </p>
                    
                    <div className="flex items-center justify-center md:justify-start mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(nounouProfile.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">
                          {nounouProfile.rating} ({nounouProfile.reviewCount} avis)
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center justify-center md:justify-start">
                        <Calendar className="h-4 w-4 mr-2 text-nounou-blue" />
                        <span>Disponible à partir de: {nounouProfile.availability}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start">
                        <Flag className="h-4 w-4 mr-2 text-nounou-pink" />
                        <span>Nationalité: {nounouProfile.nationality}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Presentation */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Présentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {nounouProfile.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {nounouProfile.skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Verifications */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Confiance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className={`flex items-center space-x-2 ${nounouProfile.verifications.identity ? 'text-green-600' : 'text-gray-400'}`}>
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Identité Vérifiée</span>
                  </div>
                  <div className={`flex items-center space-x-2 ${nounouProfile.verifications.email ? 'text-green-600' : 'text-gray-400'}`}>
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">E-mail Vérifié</span>
                  </div>
                  <div className={`flex items-center space-x-2 ${nounouProfile.verifications.phone ? 'text-green-600' : 'text-gray-400'}`}>
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">Téléphone Vérifié</span>
                  </div>
                  <div className={`flex items-center space-x-2 ${nounouProfile.verifications.facebook ? 'text-green-600' : 'text-gray-400'}`}>
                    <Facebook className="h-4 w-4" />
                    <span className="text-sm">Facebook Vérifié</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Expérience de garde des enfants selon l'âge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(nounouProfile.experience).map(([age, exp]) => (
                    <div key={age} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">{age}</span>
                      <Badge variant="secondary">{exp}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Niveau d'étude
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="border-nounou-blue text-nounou-blue">
                    {nounouProfile.education}
                  </Badge>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5" />
                    Langues
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {nounouProfile.languages.map((lang, index) => (
                      <Badge key={index} variant="outline" className="border-nounou-pink text-nounou-pink">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formations */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Formations / Attestations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {nounouProfile.formations.map((formation, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm">{formation}</span>
                      <Button variant="outline" size="sm">
                        Voir attestation
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Options */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Options de disponibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {nounouProfile.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{option}</span>
                    </div>
                  ))}
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
                            const isActive = nounouProfile.schedule[day]?.some(slot => {
                              const [start, end] = slot.split('-');
                              return time >= start && time < end;
                            });
                            return (
                              <td key={`${day}-${time}`} className="border p-1 md:p-2 text-center">
                                {isActive && (
                                  <div className="w-3 h-3 md:w-4 md:h-4 bg-nounou-pink rounded mx-auto"></div>
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

            {/* Photo Album */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="mr-2 h-5 w-5" />
                  Mon album photo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {nounouProfile.photos.map((photo, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={photo} 
                        alt={`Photo ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Recommandations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    {nounouProfile.name} peut vous fournir sur demande les coordonnées d'anciens employeurs qui la recommandent.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Aucune recommandation disponible!
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    Seuls les parents ayant eu affaire aux services de « {nounouProfile.name} »
                    peuvent laisser une recommandation, celle-ci sera visible sur le profil de la nounou
                  </p>
                  <Button variant="outline">
                    Écrire une recommandation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {nounouProfile.firstName} {nounouProfile.lastName}
                  </h3>
                  <div className="flex items-center justify-center mb-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(nounouProfile.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
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

            {/* Tarif */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Euro className="mr-2 h-5 w-5" />
                  Tarif
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-2xl font-bold text-nounou-pink mb-2">
                    {nounouProfile.tarif}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    (visible après connexion)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Localisation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0234567890123!2d-6.8498!3d33.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU4JzE3LjgiTiA2wrA1MCc1OS4zIlc!5e0!3m2!1sen!2sma!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Nounou"
                  />
                </div>
                <p className="text-sm text-muted-foreground flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {nounouProfile.location}
                </p>
              </CardContent>
            </Card>

            {/* Family Life */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Vie de famille
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {nounouProfile.familyLife}
                </p>
              </CardContent>
            </Card>

            {/* Similar Profiles */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Profils similaires</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>N{item}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">Nounou {item}</p>
                        <p className="text-xs text-muted-foreground">Casablanca</p>
                        <div className="flex items-center mt-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-muted-foreground ml-1">4.{item}</span>
                        </div>
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

export default NounouProfile;
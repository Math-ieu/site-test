import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-nounou-blue/10 to-nounou-pink/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gradient mb-4">
              Contactez-nous
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous sommes disponibles pour répondre à toutes vos questions et vos demandes
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstname">Prénom *</Label>
                    <Input id="firstname" placeholder="Votre prénom" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname">Nom *</Label>
                    <Input id="lastname" placeholder="Votre nom" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" placeholder="+212 6XX XXX XXX" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="question">Question générale</SelectItem>
                      <SelectItem value="support">Support technique</SelectItem>
                      <SelectItem value="partnership">Partenariat</SelectItem>
                      <SelectItem value="complaint">Réclamation</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Décrivez votre demande en détail..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full btn-gradient">
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer le message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-nounou-blue/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-nounou-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                      <p className="text-muted-foreground">
                        36 boulevard d'anfa, résidence Anafe A, étage 7<br />
                        21000 Casablanca - Maroc
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-nounou-pink/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-nounou-pink" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:Hello@nounou.ma" className="hover:text-primary transition-colors">
                          Hello@nounou.ma
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-nounou-orange/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-nounou-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:0522200177" className="hover:text-primary transition-colors">
                          0522 200 177
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-nounou-blue/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-nounou-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Horaires</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Lundi - Vendredi : 9h00 - 18h00</p>
                        <p>Samedi : 9h00 - 13h00</p>
                        <p>Dimanche : Fermé</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Notre localisation</h2>
            <p className="text-muted-foreground">
              Retrouvez-nous au cœur de Casablanca
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0234567890123!2d-7.6298!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzNyc0Ny4zIlc!5e0!3m2!1sen!2sma!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Bureau Casablanca"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [rsvpFormData, setRsvpFormData] = useState({
    name: '',
    guests: 1,
    attendance: '',
    message: ''
  });

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за ваш ответ! Мы получили вашу заявку на участие.');
  };

  return (
    <div className="min-h-screen bg-wedding-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-cormorant text-2xl font-bold text-wedding-burgundy">
              А & Е
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-wedding-gray hover:text-wedding-burgundy transition-colors font-montserrat">Главная</a>
              <a href="#story" className="text-wedding-gray hover:text-wedding-burgundy transition-colors font-montserrat">Наша история</a>
              <a href="#details" className="text-wedding-gray hover:text-wedding-burgundy transition-colors font-montserrat">Детали</a>
              <a href="#rsvp" className="text-wedding-gray hover:text-wedding-burgundy transition-colors font-montserrat">RSVP</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-wedding-cream to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-wedding-burgundy animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-wedding-gray animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="text-center z-10 animate-fade-in">
          <div className="mb-8 relative">
            <img 
              src="/img/1949d4e9-f0a2-4442-a791-b6231b7148d1.jpg" 
              alt="Wedding Rings" 
              className="w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl animate-float"
            />
          </div>
          
          <h1 className="font-cormorant text-8xl md:text-9xl font-bold text-wedding-burgundy mb-6 leading-none">
            <span className="block">Анна</span>
            <span className="text-3xl md:text-4xl text-wedding-gray font-normal mx-4">&</span>
            <span className="block">Евгений</span>
          </h1>
          
          <div className="w-32 h-0.5 bg-wedding-burgundy mx-auto mb-8"></div>
          
          <p className="font-montserrat text-xl md:text-2xl text-wedding-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            Приглашаем вас разделить с нами<br />
            самый важный день нашей жизни
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 mb-12 inline-block shadow-xl border border-wedding-gray-light/20">
            <p className="font-cormorant text-5xl font-semibold text-wedding-burgundy mb-3">15 августа 2024</p>
            <p className="font-montserrat text-xl text-wedding-gray">Москва • Усадьба Коломенское</p>
            <div className="flex justify-center mt-6 space-x-4">
              <Icon name="MapPin" size={24} className="text-wedding-burgundy" />
              <Icon name="Clock" size={24} className="text-wedding-gray" />
              <Icon name="Heart" size={24} className="text-wedding-burgundy-light" />
            </div>
          </div>
          
          <Button 
            className="bg-wedding-burgundy hover:bg-wedding-burgundy-dark text-white px-12 py-4 rounded-full font-montserrat text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({behavior: 'smooth'})}
          >
            Подтвердить участие
          </Button>
        </div>
      </section>

      {/* Love Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-cormorant text-5xl font-bold text-wedding-burgundy mb-6">Наша история любви</h2>
            <div className="w-24 h-0.5 bg-wedding-burgundy mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img 
                src="/img/603d875e-1100-4d3c-a620-59b5f2fa558b.jpg" 
                alt="Our Love Story" 
                className="rounded-3xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <div className="bg-wedding-cream/50 p-6 rounded-2xl">
                <h3 className="font-cormorant text-2xl font-semibold text-wedding-burgundy mb-3">Первая встреча</h3>
                <p className="font-montserrat text-wedding-gray leading-relaxed">
                  Наши пути впервые пересеклись весной 2019 года в уютном кафе на Арбате. 
                  Случайный взгляд через зал стал началом самой прекрасной истории нашей жизни.
                </p>
              </div>
              
              <div className="bg-wedding-cream/50 p-6 rounded-2xl">
                <h3 className="font-cormorant text-2xl font-semibold text-wedding-burgundy mb-3">Предложение</h3>
                <p className="font-montserrat text-wedding-gray leading-relaxed">
                  5 лет спустя, в том же самом кафе, Евгений встал на одно колено и произнес 
                  слова, которые изменили нашу жизнь навсегда. Конечно же, ответ был "Да!".
                </p>
              </div>
              
              <div className="bg-wedding-cream/50 p-6 rounded-2xl">
                <h3 className="font-cormorant text-2xl font-semibold text-wedding-burgundy mb-3">Новая глава</h3>
                <p className="font-montserrat text-wedding-gray leading-relaxed">
                  Теперь мы готовы начать новую главу нашей истории, и мы хотим, 
                  чтобы наши самые дорогие люди были рядом с нами в этот особенный день.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section id="details" className="py-20 bg-wedding-cream/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-cormorant text-5xl font-bold text-wedding-burgundy mb-6">Детали торжества</h2>
            <div className="w-24 h-0.5 bg-wedding-burgundy mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in">
              <CardContent className="p-8 text-center">
                <Icon name="Church" size={48} className="text-wedding-burgundy mx-auto mb-4" />
                <h3 className="font-cormorant text-2xl font-semibold text-wedding-burgundy mb-4">Церемония</h3>
                <p className="font-montserrat text-wedding-gray mb-2">15:00 - 15:30</p>
                <p className="font-montserrat text-sm text-wedding-gray-light">
                  Храм Вознесения Господня<br />
                  в Коломенском
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-8 text-center">
                <Icon name="Camera" size={48} className="text-wedding-burgundy mx-auto mb-4" />
                <h3 className="font-cormorant text-2xl font-semibold text-wedding-burgundy mb-4">Фотосессия</h3>
                <p className="font-montserrat text-wedding-gray mb-2">15:30 - 17:00</p>
                <p className="font-montserrat text-sm text-wedding-gray-light">
                  Парк Коломенское<br />
                  у дворца Алексея Михайловича
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-8 text-center">
                <Icon name="PartyPopper" size={48} className="text-wedding-burgundy mx-auto mb-4" />
                <h3 className="font-cormorant text-2xl font-semibold text-wedding-burgundy mb-4">Банкет</h3>
                <p className="font-montserrat text-wedding-gray mb-2">18:00 - 01:00</p>
                <p className="font-montserrat text-sm text-wedding-gray-light">
                  Ресторан "Царская охота"<br />
                  ул. Андропова, 39
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Icon name="MapPin" size={32} className="text-wedding-burgundy mt-1" />
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-wedding-burgundy mb-2">Как добраться</h3>
                    <p className="font-montserrat text-wedding-gray">
                      Станция метро "Коломенская", далее автобус №263 до остановки "Музей-заповедник Коломенское"
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="border-wedding-burgundy text-wedding-burgundy hover:bg-wedding-burgundy hover:text-white w-full">
                  Открыть карту
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Icon name="Gift" size={32} className="text-wedding-burgundy mt-1" />
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-wedding-burgundy mb-2">Подарки</h3>
                    <p className="font-montserrat text-wedding-gray">
                      Ваше присутствие - лучший подарок для нас. Если хотите преподнести что-то особенное, 
                      мы будем благодарны за помощь в организации нашего медового месяца.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-cormorant text-5xl font-bold text-wedding-burgundy mb-6">Подтвердите участие</h2>
            <div className="w-24 h-0.5 bg-wedding-burgundy mx-auto mb-4"></div>
            <p className="font-montserrat text-wedding-gray">
              Пожалуйста, подтвердите ваше участие до 1 августа 2024 года
            </p>
          </div>
          
          <Card className="shadow-2xl animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleRsvpSubmit} className="space-y-6">
                <div>
                  <label className="block font-montserrat text-wedding-gray mb-2">Ваше имя</label>
                  <Input 
                    required
                    placeholder="Введите ваше полное имя"
                    value={rsvpFormData.name}
                    onChange={(e) => setRsvpFormData({...rsvpFormData, name: e.target.value})}
                    className="border-wedding-gray/30 focus:border-wedding-burgundy"
                  />
                </div>
                
                <div>
                  <label className="block font-montserrat text-wedding-gray mb-2">Количество гостей</label>
                  <select 
                    className="w-full p-3 border border-wedding-gray/30 rounded-md focus:border-wedding-burgundy focus:outline-none"
                    value={rsvpFormData.guests}
                    onChange={(e) => setRsvpFormData({...rsvpFormData, guests: parseInt(e.target.value)})}
                  >
                    <option value={1}>1 человек</option>
                    <option value={2}>2 человека</option>
                    <option value={3}>3 человека</option>
                    <option value={4}>4 человека</option>
                  </select>
                </div>
                
                <div>
                  <label className="block font-montserrat text-wedding-gray mb-2">Сможете присутствовать?</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="attendance" 
                        value="yes"
                        onChange={(e) => setRsvpFormData({...rsvpFormData, attendance: e.target.value})}
                        className="mr-2 text-wedding-burgundy"
                      />
                      <span className="font-montserrat text-wedding-gray">Да, с радостью приду!</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="attendance" 
                        value="no"
                        onChange={(e) => setRsvpFormData({...rsvpFormData, attendance: e.target.value})}
                        className="mr-2 text-wedding-burgundy"
                      />
                      <span className="font-montserrat text-wedding-gray">К сожалению, не смогу присутствовать</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block font-montserrat text-wedding-gray mb-2">Сообщение для нас (необязательно)</label>
                  <Textarea 
                    placeholder="Поделитесь своими пожеланиями или особыми требованиями"
                    value={rsvpFormData.message}
                    onChange={(e) => setRsvpFormData({...rsvpFormData, message: e.target.value})}
                    className="border-wedding-gray/30 focus:border-wedding-burgundy min-h-24"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-wedding-burgundy hover:bg-wedding-burgundy-light text-white py-3 text-lg font-montserrat transition-all duration-300 transform hover:scale-105"
                >
                  Отправить ответ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-wedding-burgundy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="font-cormorant text-3xl font-bold mb-2">Анна & Евгений</h3>
            <p className="font-montserrat text-wedding-cream/80">15 августа 2024 • Москва</p>
          </div>
          
          <div className="w-24 h-0.5 bg-white/30 mx-auto mb-6"></div>
          
          <p className="font-montserrat text-wedding-cream/80 italic">
            "Любовь - это когда два сердца бьются как одно"
          </p>
          
          <div className="mt-8 flex justify-center space-x-6">
            <Icon name="Heart" size={24} className="text-wedding-cream/60 animate-float" />
            <Icon name="Rings" size={24} className="text-wedding-cream/60 animate-float" fallback="Heart" style={{animationDelay: '1s'}} />
            <Icon name="Heart" size={24} className="text-wedding-cream/60 animate-float" style={{animationDelay: '2s'}} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
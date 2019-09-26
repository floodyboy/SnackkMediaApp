import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';
import { HttpClientModule } from '@angular/common/http';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'farmer.cloudmqtt.com',
  port: 38345,
  protocol: 'wss',
  username: 'unchrdkg',
  password: 'rZczaE1gEkuI'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MqttModule.forRoot(MQTT_SERVICE_OPTIONS), HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
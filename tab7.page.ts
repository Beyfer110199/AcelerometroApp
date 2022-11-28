import { Component, OnInit } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@awesome-cordova-plugins/device-motion/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page  {
x: string;
y: string;
z: string;
timestamp: string;
id: any;

  constructor( public navCtrl: NavController, private deviceMotion: DeviceMotion)
   {
    this.x='-';
    this.y='-';
    this.z='-';
    this.timestamp='-';

   }
   start()
   {
     try
     {
        // eslint-disable-next-line no-var
      var option: DeviceMotionAccelerometerOptions =
      {
        frequency:200
      };
      this.id = this.deviceMotion.watchAcceleration(option).subscribe((acc: DeviceMotionAccelerationData)=>
      {
        this.x=''+acc.x;
        this.y=''+acc.y;
        this.z=''+acc.z;
        this.timestamp=''+acc.timestamp;


      }
      );

    }catch(err)
    {
      alert('Error'+ err);
    }
  }
  stop()
  {
    this.id.unsubscribe();
  }
}

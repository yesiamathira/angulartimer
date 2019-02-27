import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   a: any;
  constructor() { }

  ngOnInit() {    
              this.a=new Array(100);
            //   for(var i=0;i<100;i++)
            //   {
            //     this.a[i]=i+1;
            //     setTimeout(()=>console.log(this.a[i]),5000);
            //   }
            // // {
            // //   for (var i=0;i<this.a.length;i++)
            // //   setTimeout(()=>console.log(this.a[i]),5000);
            // // }
            // }
            for (var i = 1; i <this.a.length; i++) {
              setDelay(i);
            }
            
          function setDelay(i)
          {
            setTimeout(function(){
                    console.log(i);
                    document.write(i + "<br>");
                  },i* 2000);
            }
            
}


}

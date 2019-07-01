using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPIRESTful.Models;

namespace WebAPIRESTful.Controllers
{
    public class RestaurantController : ApiController
    {

        private Restaurant[] Restaurants = new Restaurant[]
        {
            //บะหมี่ปราบเซียน+ประชาชื่น+8/@13.8069079,100.541996
            new Restaurant{Id = 1, Name = "บะหมี่ปราบเซียน ประชาชื่น 8",Description="293 27 ซอย ประชาชื่น 8 แขวง บางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10800",Lat =13.8069079,Lng=100.541996},
            new Restaurant{Id = 2, Name = "ก๋วยเตี๋ยวเตาปูน(ล็อคล้อ)",Description="10, 6 ถนน ประชาชื่น แขวง บางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10800",Lat =13.8142846,Lng=100.5432543},
            new Restaurant{Id = 3, Name = "อร่อยแล้วสั่งต่อ",Description="812/10 ซอย ประชาชื่น 25 ถนน ประชาชื่น แขวง วงศ์สว่าง เขตบางซื่อ กรุงเทพมหานคร 10800",Lat =13.8149514,Lng=100.5259594},
            new Restaurant{ Id = 4, Name = "คำโฮม คาเฟ่",Description="คอนโดยูดีไลท์ 695/4 ซอย ประชาชื่น 19 แขวง บางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10800",Lat =13.8184855,Lng=100.5359784}
        };

        // GET: api/Restaurant
        public IEnumerable<Restaurant> Get()
        {
            return Restaurants;
        }

        // GET: api/Restaurant/5
        public Restaurant Get(int id)
        {
            Restaurant Restaurant = Restaurants.Where(e => e.Id == id).First();
            return Restaurant;
        }
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/Restaurant
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Restaurant/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Restaurant/5
        public void Delete(int id)
        {
        }
    }
}

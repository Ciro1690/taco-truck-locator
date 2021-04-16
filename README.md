## Taco Truck Locator

Taco Truck Co. would like a simple truck locator to be created. This locator will show the businesses where the taco trucks are parked in front of.

Using the following API URL, https://my.api.mockaroo.com/locations.json?key=a45f1200, the truck state is populated through an axios GET request. If the GET request responds with an error, there is dummy data to populate the application.

Leveraging React's state management and bootstrap styling conventions, the truck locator app was designed with mobile first in mind. Upon loading, the state is populated with data from the trucks, as well as accompanying Google Maps API data.

Here is a single locations sample data:
```json
{
    "id": 1,
    "name": "Schmeler Inc",
    "url": "http://mapy.cz/quam/sapien/varius/ut.jsp",
    "address": "742 Bashford Court",
    "city": "Fort Wayne",
    "state": "IN",
    "postal_code": "46862",
    "latitude": "41.0938",
    "longitude": "-85.0707",
    "monday_open": "9:41 AM",
    "monday_close": "4:42 PM",
    "tuesday_open": "9:08 AM",
    "tuesday_close": "9:49 PM",
    "wednesday_open": "6:56 AM",
    "wednesday_close": "5:15 PM",
    "thursday_open": "9:57 AM",
    "thursday_close": "8:10 PM",
    "friday_open": "6:43 AM",
    "friday_close": "5:31 PM",
    "saturday_open": "6:45 AM",
    "saturday_close": "4:43 PM",
    "sunday_open": "8:14 AM",
    "sunday_close": "4:05 PM"
}
```
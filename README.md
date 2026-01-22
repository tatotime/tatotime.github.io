<body>
<section>
  <h1>Pizza Ordering Form</h1>
  <section>
    <h2>Contact Information</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" name="name"><br>
    
      <label for="phone">Phone:</label>
      <input type="phone" name="phonenum"><br>
      
      <label for="email">Email:</label>
      <input type="email" name="email"><br>
    </form>
  </section>
  
  <section>
    <h2>Select Pizza Size</h2>
    <form>
    <label for="pizzasize">Pizza Size:</label>
    <select name="pizzasize">
      <option name="default">--Select Size--</option>
      <option name="small">Small</option>
      <option name="med">Medium</option>
      <option name="large">Large</option>
    </select>
    </form>
  </section>
  
  <section>
    <h2>Select Sauce</h2>
    <form>
    <input type="radio" name="Marinara">
    <label for="marinara">Marinara</label><br>
    <input type="radio" name="Ranch">
    <label for="ranch">Ranch</label><br>
    <input type="radio" name="Barbeque">
    <label for="bbq">Barbeque</label><br>
    <input type="radio" name="none">
    <label for="none">No sauce</label><br>
    </form>
  </section>
  
  <section>
    <h2>Select Toppings</h2>
    <form>
    <input type="checkbox" name="Pepperoni">
    <label for="pep">Pepperoni</label>
    
    <input type="checkbox" name="Sausage">
    <label for="sausage">Sausage</label><br>
    
    <input type="checkbox" name="Mushroom">
    <label for="mushroom">Mushroom</label>
  
    <input type="checkbox" name="Pineapple">
    <label for="pineapple">Pineapple</label><br>
    
    <input type="checkbox" name="Peppers">
    <label for="peppers">Peppers</label>
    
    <input type="checkbox" name="Onions">
    <label for="onions">Onions</label><br>
    </form>
  </section>
  
  <section>
    <h2>Additional Instructions</h2>
    <form>
    <textarea rows="2" cols="40">Add instructions</textarea><br>
    <input type="submit" value="Submit"><br><br><br><br><br>
    </form>
  </section>
  
  <section>
    <table>
    <thead>List of my Favorite Games</thead>
      <tr>
        <th>Developer</th>
        <th>Title</th>
        <th>Year</th>
      </tr>
      <tr>
        <td rowspan="3">Bungie</td>
        <td>Halo</td>
        <td>2001</td>
      </tr>
      <tr>
        <td>Halo 2</td>
        <td>2004</td>
      </tr>
      <tr>
        <td>Halo 3</td>
        <td>2007</td>
      </tr>
      <tr>
        <td>Mojang</td>
        <td>Minecraft</td>
        <td>2011</td>
      </tr>
      <tr>
        <td colspan="3">Count: 4</td>
      </tr>
    </table>
  </section>
</section>

</body>

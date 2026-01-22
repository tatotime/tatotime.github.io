<body>
<h3>Pizza Ordering Form</h3>
<section>
  <h4>Contact Information</h4>
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
  <h4>Select Pizza Size</h4>
  <form>
  <select name="pizzasize">
    <label for="pizzasize">Pizza Size:</label>
    <option name="small">Small</option>
    <option name="med">Medium</option>
    <option name="large">Large</option>
  </select>
  </form>
</section>

<section>
  <h4>Select Sauce</h4>
  <form>
  <input type="radio" name="Marinara">
  <label for="marinara">Marinara</label><br>
  <input type="radio" name="Ranch">
  <label for="ranch">Ranch</label><br>
  <input type="radio" name="Barbeque">
  <label for="bbq">Barbeque</label><br>
  </form>
</section>

<section>
  <h3>Select Toppings</h3>
  <form>
  <label for="pep">Pepperoni</label>
  <input type="checkbox" name="Pepperoni">
  <label for="sausage">Sausage</label>
  <input type="checkbox" name="Sausage"><br>
  <label for="mushroom">Mushroom</label>
  <input type="checkbox" name="Mushroom">
  <label for="pineapple">Pineapple</label>
  <input type="checkbox" name="Pineapple"><br>
  <label for="peppers">Peppers</label>
  <input type="checkbox" name="Peppers">
  <label for="onions">Onions</label>
  <input type="checkbox" name="Onions"><br>
  </form>
</section>

<section>
  <h3>Additional Instructions</h3>
  <form>
  <textarea rows="2" cols="40">Add instructions</textarea><br>
  <input type="submit" value="Submit">
  </form>
</section>

<section>
  <table>
    <tr>
      <th>Developer</th>
      <th>Title</th>
      <th>Year</th>
    </tr>
    <tr>
      <td rowspan="3">Bungie></td>
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
</body>

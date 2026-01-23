<body>
  <section>
    <form>
      <h1>Pizza Ordering Form</h1>
      <section>
        <h2>Contact Information</h2>
        <label for="name">Name:</label>
        <input type="text" name="name" required><br>
        
        <label for="phone">Phone:</label>
        <input type="tel" name="phonenum" required><br>
        
        <label for="email">Email:</label>
        <input type="email" name="email" required><br>
      </section>
      
      <section>
        <h2>Select Pizza Size</h2>
        <label for="pizzasize">Pizza Size:</label>
        <select name="size" required>
          <option value="" name="size" selected disabled hidden>--Select Size--</option>
          <option name="size" value="medium">Medium</option>
          <option name="size" value="large">Large</option>
          <option name="size" value="xlarge">XLarge</option>
        </select>
      </section>
      
      <section>
        <h2>Select Sauce</h2>
        <input type="radio" id="marinara" name="sauce" required>
        <label for="marinara">Marinara</label><br>
        <input type="radio" id="ranch" name="sauce">
        <label for="ranch">Ranch</label><br>
        <input type="radio" id="bbq" name="sauce">
        <label for="bbq">Barbeque</label><br>
        <input type="radio" id="none" name="sauce">
        <label for="none">None</label><br>
      </section>
      
      <section>
        <h2>Select Toppings</h2>
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
      </section>
      
      <section>
        <h2>Additional Instructions</h2>
        <textarea rows="2" cols="20">Add instructions</textarea><br>
        <input type="submit" value="Submit"><br><br><br><br><br>
      </section>
    </form>
  </section>
  
  <article>
    <table border="1px solid black">
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
  </article>
</body>

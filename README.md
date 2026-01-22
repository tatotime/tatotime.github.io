<!DOCTYPE html>
<body>
<h1>Pizza Ordering Form</h1>
<section>
  <h2>Contact Information</h2>
  <Form>
    <label for="name">Name:</label>
    <input type="text" name="name"><br>
  
    <label for="phone">Phone:</label>
    <input type="phone" name="phonenum"><br>
    
    <label for="email">Email:</label>
    <input type="email" name="email"><br>
  </Form>
</section>

<section>
  <h2>Select Pizza Size</h2>
  <Form>
  <select name="pizzasize">
    <label for="pizzasize">Pizza Size:</label>
    <option name="small">Small</option>
    <option name="med">Medium</option>
    <option name="large">Large</option>
  </select>
  </Form>
</section>

<section>
  <h2>Select Sauce</h2>
  <Form>
  <input type="radio" name="Marinara">
  <input type="radio" name="Ranch">
  <input type="radio" name="Barbeque">
  </Form>
</section>

<section>
  <h2>Select Toppings</h2>
  <Form>
  <label for="pep">Pepperoni</label>
  <input type="checkbox" name="Pepperoni">
  <label for="sausage">Sausage</label>
  <input type="checkbox" name="Sausage"><br>
  <label for="mushroom">Mushroom</label>
  <input type="checkbox" name=Mushroom">
  <label for="pineapple">Pineapple</label>
  <input type="checkbox" name="Pineapple"><br>
  <label for="peppers">Peppers</label>
  <input type="checkbox" name="Peppers">
  <label for="onions">Onions</label>
  <input type="checkbox" name="Onions"><br>
  </Form>
</section>

<section>
  <h2>Additional Instructions</h2>
  <Form>
  <textarea rows="4" cols="50">Add instructions</textarea>
  <input type="submit" value="Submit">
  </Form>
</section>
</body>
</html>

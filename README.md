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
  <select name="pizzasize">
    <label for="pizzasize">Pizza Size:</label>
    <option name="small">Small</option>
    <option name="med">Medium</option>
    <option name="large">Large</option>
  </select>
</section>

<section>
  <h2>Select Sauce</h2>
  <input type="radio" name="Marinara">
  <input type="radio" name="Ranch">
  <input type="radio" name="Barbeque">
</section>

<section>
  <h2>Select Toppings</h2>
  <input type="checkbox" name="Pepperoni">
  <input type="checkbox" name="Sausage"><br>
  <input type="checkbox" name=Mushroom">
  <input type="checkbox" name="Pineapple"><br>
  <input type="checkbox" name="Peppers">
  <input type="checkbox name="Onions"><br>
</section>

<section>
  <h2>Additional Instructions</h2>
  <input type="textarea">
  <input type="submit" value="Submit">
</section>

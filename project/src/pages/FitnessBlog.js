/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import '../styles/FitnessBlog.css';
import StripeCheckout from 'react-stripe-checkout';

function App() {
  const onToken = (token) => {
    console.log(token);
  };
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally, log or use the gender
  };

  const calculateTDEE = (genderType) => {
    // Your TDEE calculation logic goes here
    alert(`Calculating TDEE for ${genderType}`);
  };

  const blogContent = () => {
    if (gender === 'male') {
      return (
        <>
          <p>Welcome to the male fitness blog! Here you will find tips and workouts tailored for men.</p>
          <div className="blog-section">
            <h3>Body Types</h3>
            <p>There are three main body types:</p>
            <ul>
              <li><strong>Ectomorph:</strong> Lean and long, with difficulty building muscle.</li>
              <li><strong>Mesomorph:</strong> Muscular and well-built, with a high metabolism and responsive muscle cells.</li>
              <li><strong>Endomorph:</strong> Higher body fat, often pear-shaped, with a tendency to store fat.</li>
            </ul>
            <img src="https://example.com/body-types.jpg" alt="Body Types" />
          </div>
          <div className="blog-section">
            <h3>Fat Loss Diet Plan</h3>
            <p>Here is a sample diet plan for fat loss:</p>
            <ul>
              <li>Breakfast: Oatmeal with berries and nuts</li>
              <li>Lunch: Grilled chicken salad with mixed greens</li>
              <li>Dinner: Baked salmon with steamed vegetables</li>
              <li>Snacks: Greek yogurt, almonds, and fruit</li>
            </ul>
            <iframe
              src="https://www.youtube.com/embed/diet-plan-video"
              title="Fat Loss Diet Plan"
            />
          </div>
          <div className="blog-section">
            <h3>Weight Gain Diet Plan</h3>
            <p>Here is a sample diet plan for weight gain:</p>
            <ul>
              <li>Breakfast: Scrambled eggs with avocado and toast</li>
              <li>Lunch: Turkey sandwich with whole grain bread</li>
              <li>Dinner: Beef stir-fry with rice</li>
              <li>Snacks: Protein shakes, peanut butter, and bananas</li>
            </ul>
            <iframe
              src="https://www.youtube.com/embed/weight-gain-video"
              title="Weight Gain Diet Plan"
            />
          </div>
          <div className="blog-section">
            <h3>TDEE Calculator</h3>
            <form id="tdeeForm">
              <label htmlFor="weight">Weight (kg):</label>
              <input type="number" id="weight" name="weight" required />
              <label htmlFor="height">Height (cm):</label>
              <input type="number" id="height" name="height" required />
              <label htmlFor="age">Age:</label>
              <input type="number" id="age" name="age" required />
              <label htmlFor="activity">Activity Level:</label>
              <select id="activity" name="activity" required>
                <option value="1.2">Sedentary (little or no exercise)</option>
                <option value="1.375">Lightly active (light exercise/sports 1-3 days/week)</option>
                <option value="1.55">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                <option value="1.725">Very active (hard exercise/sports 6-7 days a week)</option>
                <option value="1.9">Super active (very hard exercise/sports & physical job)</option>
              </select>
              <button type="button" onClick={() => calculateTDEE('male')}>Calculate TDEE</button>
            </form>
          </div>
        </>
      );
    } if (gender === 'female') {
      return (
        <>
          <p>Welcome to the female fitness blog! Here you will find tips and workouts tailored for women.</p>
          <div className="blog-section">
            <h3>Body Types</h3>
            <p>There are three main body types:</p>
            <ul>
              <li><strong>Ectomorph:</strong> Lean and long, with difficulty building muscle.</li>
              <li><strong>Mesomorph:</strong> Muscular and well-built, with a high metabolism and responsive muscle cells.</li>
              <li><strong>Endomorph:</strong> Higher body fat, often pear-shaped, with a tendency to store fat.</li>
            </ul>
            <img src="https://example.com/body-types.jpg" alt="Body Types" />
          </div>
          <div className="blog-section">
            <h3>Fat Loss Diet Plan</h3>
            <p>Here is a sample diet plan for fat loss:</p>
            <ul>
              <li>Breakfast: Smoothie with spinach, banana, and almond milk</li>
              <li>Lunch: Quinoa salad with chickpeas and vegetables</li>
              <li>Dinner: Grilled tofu with steamed broccoli</li>
              <li>Snacks: Hummus with carrot sticks, apple slices with almond butter</li>
            </ul>
            <iframe
              src="https://www.youtube.com/embed/female-diet-plan-video"
              title="Fat Loss Diet Plan"
            />
          </div>
          <div className="blog-section">
            <h3>Weight Gain Diet Plan</h3>
            <p>Here is a sample diet plan for weight gain:</p>
            <ul>
              <li>Breakfast: Greek yogurt with granola and honey</li>
              <li>Lunch: Lentil soup with whole grain bread</li>
              <li>Dinner: Pasta with marinara sauce and vegetables</li>
              <li>Snacks: Trail mix, protein bars, and smoothies</li>
            </ul>
            <iframe
              src="https://www.youtube.com/embed/female-weight-gain-video"
              title="Weight Gain Diet Plan"
            />
          </div>
          <div className="blog-section">
            <h3>TDEE Calculator</h3>
            <form id="tdeeForm">
              <label htmlFor="weight">Weight (kg):</label>
              <input type="number" id="weight" name="weight" required />
              <label htmlFor="height">Height (cm):</label>
              <input type="number" id="height" name="height" required />
              <label htmlFor="age">Age:</label>
              <input type="number" id="age" name="age" required />
              <label htmlFor="activity">Activity Level:</label>
              <select id="activity" name="activity" required>
                <option value="1.2">Sedentary (little or no exercise)</option>
                <option value="1.375">Lightly active (light exercise/sports 1-3 days/week)</option>
                <option value="1.55">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                <option value="1.725">Very active (hard exercise/sports 6-7 days a week)</option>
                <option value="1.9">Super active (very hard exercise/sports & physical job)</option>
              </select>
              <button type="button" onClick={() => calculateTDEE('female')}>Calculate TDEE</button>
            </form>
          </div>
        </>
      );
    }
    return <p>Please select a gender to view the blog content.</p>;
  };

  return (
    <div>
      <header>
        <h1>Fitness Blog </h1>
        <div className="nav-buttons">
  <button type="button" onClick={() => window.location.href = '/home'}>Home</button>
  <button type="button" onClick={() => window.location.href = ''}>More Info</button>
  <StripeCheckout
    amount="500"
    billingAddress
    description="Fit-Life"
    image="https://www.svgrepo.com/show/456141/exercise-bike.svg"
    locale="auto"
    name="Fit-Life.tld"
    stripeKey="pk_test_51PqxINCQH7Zne3rxX38RN4roNm64qK77cOdGhJoH91ZDf0mcowATXgSCVh33JU8BS4RWnMvZ7FfQta2AKqmgki9S00Wmec58QK"
    token={onToken}
    zipCode
  />
        </div>
      </header>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>
            <input type="radio" name="gender" value="male" onChange={() => setGender('male')} aria-label="Male" /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" onChange={() => setGender('female')} aria-label="Female" /> Female
          </label>
          <button type="submit">Submit</button>
        </form>
        <div id="blogContent" className="blog-section">
          {blogContent()}
        </div>
      </div>
    </div>
  );
}

export default App;

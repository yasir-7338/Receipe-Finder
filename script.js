// Sample list of recipes with ingredients, image URLs, preparation steps, nutritional information, and dietary preference
const recipes = [
    {
        name: "Chole Bhature",
        dietary: "Vegetarian",
        ingredients: [
            { name: "Chickpeas", amount: "1 cup (soaked overnight)" },
            { name: "Onion", amount: "2, finely chopped" },
            { name: "Tomato", amount: "2, finely chopped" },
            { name: "Garam masala", amount: "1 tsp" },
            { name: "Cumin seeds", amount: "1 tsp" },
            { name: "Salt", amount: "to taste" },
            { name: "Oil", amount: "2 tbsp" },
            { name: "Turmeric", amount: "1/2 tsp" }
        ],
        image: "https://tse1.mm.bing.net/th?id=OIP.dFU9vTRq0yaWCtQT3sotwgHaEm&pid=Api&P=0&h=220",
        details: "A delicious North Indian dish consisting of spicy chickpeas and fried bread (bhature).",
        instructions: [
            "Soak the chickpeas overnight and boil them with a pinch of salt until soft.",
            "Heat oil in a pan, add cumin seeds, and sauté until aromatic.",
            "Add chopped onions and sauté until golden brown.",
            "Add tomatoes, turmeric, and garam masala, and cook until the oil separates.",
            "Add boiled chickpeas, mix well, and simmer for 10 minutes.",
            "For bhature, knead dough using all-purpose flour, yogurt, and a pinch of salt.",
            "Roll the dough into flat discs and deep fry in hot oil until puffed and golden.",
            "Serve hot with chickpeas and sliced onions."
        ],
        nutrition: {
            calories: "300 kcal",
            protein: "15g",
            carbs: "45g",
            fat: "10g"
        }
    },
    {
        name: "Pasta Primavera",
        dietary: "Non-Vegetarian",
        ingredients: [
            { name: "Pasta", amount: "200g" },
            { name: "Bell pepper", amount: "1, sliced" },
            { name: "Broccoli", amount: "1 cup, chopped" },
            { name: "Tomato", amount: "2, chopped" },
            { name: "Olive oil", amount: "2 tbsp" }
        ],
        image: "https://tse2.mm.bing.net/th?id=OIP.aHtFIDPbhylMJ27uGWUKngHaJQ&pid=Api&P=0&h=220",
        details: "A healthy pasta dish with mixed vegetables and olive oil.",
        instructions: [
            "Boil pasta in salted water according to the package instructions. Drain and set aside.",
            "Heat olive oil in a pan and add sliced bell peppers and broccoli. Stir-fry for 5 minutes.",
            "Add chopped tomatoes and cook for another 3 minutes.",
            "Toss the cooked pasta with the vegetables, season with salt and pepper.",
            "Serve hot with grated cheese on top if desired."
        ],
        nutrition: {
            calories: "350 kcal",
            protein: "10g",
            carbs: "60g",
            fat: "15g"
        }
        
    },
    {
        name: "Butter Chicken",
        dietary: "Non-Vegetarian",
        ingredients: [
            { name: "Chicken", amount: "500g, boneless" },
            { name: "Butter", amount: "3 tbsp" },
            { name: "Tomato", amount: "3, pureed" },
            { name: "Cream", amount: "1/4 cup" },
            { name: "Garam masala", amount: "1 tsp" }
        ],
        image: "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg",
        details: "A creamy and rich North Indian chicken curry.",
        instructions: [
            "Marinate chicken with yogurt, turmeric, chili powder, and salt for 30 minutes.",
            "Heat butter in a pan and cook the marinated chicken until tender. Remove and set aside.",
            "In the same pan, add pureed tomatoes, garam masala, and cook until the oil separates.",
            "Add the cooked chicken and mix well.",
            "Stir in cream and simmer for 5 minutes. Serve hot with naan or rice."
        ],
        nutrition: {
            calories: "450 kcal",
            protein: "30g",
            carbs: "10g",
            fat: "30g"
        }
    },
    {
        "name": "Paneer Tikka",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Paneer", "amount": "200g" },
            { "name": "Yogurt", "amount": "1/2 cup" },
            { "name": "Garam masala", "amount": "1 tsp" },
            { "name": "Lemon", "amount": "1, juiced" },
            { "name": "Cumin seeds", "amount": "1/2 tsp" }
        ],
        "image": "https://tse2.mm.bing.net/th?id=OIP.DH0KMPXHqWYW28hEc7OXLQHaE8&pid=Api&P=0&h=220",
        "details": "Grilled paneer chunks marinated with spices.",
        "instructions": [
            "Cut the paneer into cubes and set aside.",
            "Mix yogurt, garam masala, lemon juice, and cumin seeds to prepare the marinade.",
            "Coat the paneer cubes in the marinade and refrigerate for 30 minutes.",
            "Grill the paneer until golden brown on all sides.",
            "Serve with green chutney and lemon wedges."
        ],
        "nutrition": {
            "calories": "200 kcal",
            "protein": "12g",
            "carbs": "5g",
            "fat": "15g"
        }
    },
    {
        "name": "Aloo Gobi",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Potato", "amount": "2, diced" },
            { "name": "Cauliflower", "amount": "1 small, cut into florets" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Cumin seeds", "amount": "1 tsp" }
        ],
        "image": "https://veganhuggs.com/wp-content/uploads/2021/04/aloo-gobi-in-bowl-side-view.jpg",
        "details": "A flavorful curry with potatoes and cauliflower.",
        "instructions": [
            "Heat oil in a pan and add cumin seeds. Sauté until aromatic.",
            "Add chopped onions and cook until golden brown.",
            "Add potatoes, cauliflower, turmeric, and salt. Stir well.",
            "Cover and cook on low heat until potatoes and cauliflower are tender.",
            "Serve hot with rice or roti."
        ],
        "nutrition": {
            "calories": "180 kcal",
            "protein": "5g",
            "carbs": "35g",
            "fat": "8g"
        }
    },
    {
        "name": "Dal Tadka",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Lentils", "amount": "1 cup" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Garlic", "amount": "3 cloves, minced" }
        ],
        "image": "https://tse2.mm.bing.net/th?id=OIP.lC4mh24g4yzRdtNQ5L0b_gHaFj&pid=Api&P=0&h=220",
        "details": "A popular yellow lentil dish tempered with spices.",
        "instructions": [
            "Wash and boil lentils until soft. Set aside.",
            "Heat oil in a pan and add garlic, ginger, and onion. Sauté until golden.",
            "Add chopped tomatoes, salt, and spices. Cook until the oil separates.",
            "Pour the tadka over the cooked lentils and simmer for 5 minutes.",
            "Serve hot with rice or roti."
        ],
        "nutrition": {
            "calories": "250 kcal",
            "protein": "15g",
            "carbs": "40g",
            "fat": "5g"
        }
    },
    {
        "name": "Samosa",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Potato", "amount": "3, boiled and mashed" },
            { "name": "Peas", "amount": "1/2 cup, boiled" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Curry leaves", "amount": "5 leaves, chopped" }
        ],
        "image": "https://tse3.mm.bing.net/th?id=OIP.Xp2RQVjyCr3kN1G8VhcK_wHaE_&pid=Api&P=0&h=220",
        "details": "A popular snack with a spicy potato filling.",
        "instructions": [
            "Heat oil in a pan and sauté onions, ginger, and curry leaves.",
            "Add boiled potatoes, peas, and spices. Mix well and set aside to cool.",
            "Stuff the filling into samosa pastry and seal the edges.",
            "Deep fry in hot oil until golden brown.",
            "Serve with tamarind chutney."
        ],
        "nutrition": {
            "calories": "180 kcal",
            "protein": "3g",
            "carbs": "25g",
            "fat": "8g"
        }
    },
    {
        "name": "Tandoori Chicken",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Chicken", "amount": "500g" },
            { "name": "Yogurt", "amount": "1/2 cup" },
            { "name": "Garam masala", "amount": "1 tsp" },
            { "name": "Paprika", "amount": "1 tsp" },
            { "name": "Coriander powder", "amount": "1 tsp" }
        ],
        "image": "https://tse2.mm.bing.net/th?id=OIP.IZsm5UkA-S74vclelmerBAHaHa&pid=Api&P=0&h=220",
        "details": "Chicken marinated in yogurt and spices, then grilled.",
        "instructions": [
            "Marinate chicken with yogurt, garam masala, paprika, and coriander powder.",
            "Refrigerate for at least 2 hours or overnight for best flavor.",
            "Grill the chicken until cooked and slightly charred.",
            "Serve hot with naan or rice."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "30g",
            "carbs": "5g",
            "fat": "25g"
        }
    },
    {
        "name": "Palak Paneer",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Spinach", "amount": "2 cups, blanched" },
            { "name": "Paneer", "amount": "200g, cubed" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Garlic", "amount": "3 cloves, minced" }
        ],
        "image": "https://tse3.mm.bing.net/th?id=OIP.fhuzqTKaENn7V1GtwSh5NQHaHa&pid=Api&P=0&h=220",
        "details": "A healthy spinach-based curry with paneer.",
        "instructions": [
            "Blanch spinach, blend into a puree, and set aside.",
            "Heat oil in a pan and sauté onions, ginger, and garlic until golden.",
            "Add paneer cubes and cook for 2 minutes.",
            "Add the spinach puree, season with salt, and simmer for 5 minutes.",
            "Serve hot with naan or rice."
        ],
        "nutrition": {
            "calories": "220 kcal",
            "protein": "15g",
            "carbs": "10g",
            "fat": "18g"
        }
    },
    {
        "name": "Rajma",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Kidney beans", "amount": "1 cup, soaked overnight" },
            { "name": "Onion", "amount": "2, chopped" },
            { "name": "Tomato", "amount": "2, pureed" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Garlic", "amount": "3 cloves, minced" }
        ],
        "image": "https://tse4.mm.bing.net/th?id=OIP.yHMOkKWPFk89DOH-AgqchQHaHa&pid=Api&P=0&h=220",
        "details": "A hearty curry made with kidney beans.",
        "instructions": [
            "Soak kidney beans overnight and cook until soft in a pressure cooker.",
            "Heat oil in a pan, sauté onions, ginger, and garlic until golden.",
            "Add pureed tomatoes and spices, and cook until the oil separates.",
            "Mix cooked beans into the gravy and simmer for 10 minutes.",
            "Serve hot with rice or roti."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "18g",
            "carbs": "45g",
            "fat": "7g"
        }
    },
    {
        "name": "Masala Dosa",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Rice flour", "amount": "2 cups" },
            { "name": "Urad dal", "amount": "1 cup, soaked and ground" },
            { "name": "Potato", "amount": "3, boiled and mashed" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Mustard seeds", "amount": "1 tsp" }
        ],
        "image": "https://tse4.mm.bing.net/th?id=OIP.AAeMOleCsTZ6bN_MA_cQqQHaEK&pid=Api&P=0&h=220",
        "details": "Crispy rice crepes filled with spiced potato.",
        "instructions": [
            "Prepare the dosa batter by fermenting the rice flour and urad dal mixture overnight.",
            "Heat oil in a pan, add mustard seeds, onions, and mashed potatoes with spices to prepare the filling.",
            "Spread the batter thinly on a hot griddle to make dosas.",
            "Fill with spiced potatoes, fold, and serve with chutney."
        ],
        "nutrition": {
            "calories": "220 kcal",
            "protein": "6g",
            "carbs": "40g",
            "fat": "8g"
        }
    },
    {
        "name": "Biryani",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Rice", "amount": "2 cups" },
            { "name": "Chicken", "amount": "500g" },
            { "name": "Garam masala", "amount": "1 tsp" },
            { "name": "Onion", "amount": "2, sliced" },
            { "name": "Yogurt", "amount": "1/2 cup" }
        ],
        "image": "https://tse4.mm.bing.net/th?id=OIP.2rubt7oRrm9ukL2Px8ku6gHaEK&pid=Api&P=0&h=220",
        "details": "A flavorful rice dish with marinated chicken and spices.",
        "instructions": [
            "Marinate chicken with yogurt, garam masala, and spices for at least 1 hour.",
            "Cook rice with saffron, spices, and water until 70% done.",
            "In a pot, layer cooked rice and marinated chicken alternately.",
            "Seal the pot and cook on low heat for 20 minutes.",
            "Serve hot with raita."
        ],
        "nutrition": {
            "calories": "500 kcal",
            "protein": "30g",
            "carbs": "60g",
            "fat": "20g"
        }
    },
    {
        "name": "Dhokla",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Chickpea flour", "amount": "2 cups" },
            { "name": "Yogurt", "amount": "1 cup" },
            { "name": "Mustard seeds", "amount": "1 tsp" },
            { "name": "Curry leaves", "amount": "6 leaves" },
            { "name": "Turmeric", "amount": "1/4 tsp" }
        ],
        "image": "https://tse1.mm.bing.net/th?id=OIP._dxwTn1l9Y3QTuv56eELeAHaEK&pid=Api&P=0&h=220",
        "details": "A steamed, spongy Gujarati snack.",
        "instructions": [
            "Prepare batter by mixing chickpea flour, yogurt, turmeric, and water to a smooth consistency.",
            "Pour the batter into a greased tray and steam for 15 minutes.",
            "Heat oil, add mustard seeds and curry leaves, and pour the tempering over the steamed dhokla.",
            "Cut into pieces and serve."
        ],
        "nutrition": {
            "calories": "150 kcal",
            "protein": "6g",
            "carbs": "25g",
            "fat": "5g"
        }
    },
    {
        "name": "Pav Bhaji",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Potato", "amount": "3, boiled and mashed" },
            { "name": "Tomato", "amount": "3, chopped" },
            { "name": "Onion", "amount": "2, chopped" },
            { "name": "Peas", "amount": "1/2 cup, boiled" },
            { "name": "Pav", "amount": "6 buns" }
        ],
        "image": "https://tse2.mm.bing.net/th?id=OIP.gke_Z5XYTn2sUdUL_E4HTwHaGw&pid=Api&P=0&h=220",
        "details": "A spicy mashed vegetable curry served with buttered buns.",
        "instructions": [
            "Heat oil, sauté onions and tomatoes until soft.",
            "Add mashed potatoes, boiled peas, and spices. Cook until the mixture thickens.",
            "Toast pav with butter on a griddle.",
            "Serve bhaji with buttered pav and chopped onions."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "8g",
            "carbs": "50g",
            "fat": "12g"
        }
    },
    {
        "name": "Kadhi Pakora",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Gram flour", "amount": "1 cup" },
            { "name": "Yogurt", "amount": "2 cups" },
            { "name": "Onion", "amount": "1, sliced" },
            { "name": "Cumin", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" }
        ],
        "image": "https://tse2.mm.bing.net/th?id=OIP.3LThFyKdUYECFSemNFMr_wHaHa&pid=Api&P=0&h=220",
        "details": "Gram flour fritters in a tangy yogurt-based gravy.",
        "instructions": [
            "Prepare pakora batter with gram flour, water, and spices. Fry small portions until golden.",
            "In a pot, mix yogurt, gram flour, turmeric, and water to make kadhi.",
            "Cook the kadhi on low heat, stirring continuously to avoid lumps.",
            "Add fried pakoras to the kadhi and simmer for 10 minutes.",
            "Serve hot with rice or roti."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "10g",
            "carbs": "35g",
            "fat": "18g"
        }
    },
    {
        "name": "Kachori",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Wheat flour", "amount": "2 cups" },
            { "name": "Lentils", "amount": "1 cup, cooked and mashed" },
            { "name": "Cumin", "amount": "1 tsp" },
            { "name": "Fennel seeds", "amount": "1 tsp" },
            { "name": "Chili powder", "amount": "1 tsp" }
        ],
        "image": "https://tse2.mm.bing.net/th?id=OIP.suS4sAXEXpK9KNpKkxWQEAHaE8&pid=Api&P=0&h=220",
        "details": "Crispy deep-fried pastry stuffed with spicy lentil filling.",
        "instructions": [
            "Prepare dough with wheat flour, water, and a pinch of salt. Set aside.",
            "Mix cooked lentils with spices for the filling.",
            "Stuff small portions of dough with lentil filling and seal the edges.",
            "Deep fry in hot oil until golden brown.",
            "Serve with tamarind or mint chutney."
        ],
        "nutrition": {
            "calories": "250 kcal",
            "protein": "7g",
            "carbs": "40g",
            "fat": "12g"
        }
    },
    {
        "name": "Pesarattu",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Green gram", "amount": "1 cup, soaked" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Chili", "amount": "2, chopped" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Curry leaves", "amount": "6 leaves, chopped" }
        ],
        "image": "https://3.bp.blogspot.com/-YRGMFqCnJYs/Wi8_rLl68MI/AAAAAAAASyM/_saZ30M6UtIBePaXhPEPB7yhiDN5GZ2KwCEwYBhgL/s1600/Pesarattu%2B3.jpg",
        "details": "A savory pancake from Andhra Pradesh.",
        "instructions": [
            "Grind soaked green gram with water to make a smooth batter.",
            "Heat a griddle and spread the batter thinly to form pancakes.",
            "Top with chopped onions, chilies, ginger, and curry leaves.",
            "Cook until golden on both sides and serve hot with chutney."
        ],
        "nutrition": {
            "calories": "180 kcal",
            "protein": "10g",
            "carbs": "25g",
            "fat": "6g"
        }
    },
    {
        "name": "Gulab Jamun",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Milk powder", "amount": "1 cup" },
            { "name": "Sugar", "amount": "2 cups" },
            { "name": "Rose water", "amount": "1 tsp" },
            { "name": "Ghee", "amount": "2 tbsp" },
            { "name": "Cardamom", "amount": "1/2 tsp" }
        ],
        "image": "https://tse1.mm.bing.net/th?id=OIP.4R6AfffnuWlGI5GFoK_AagHaLH&pid=Api&P=0&h=220",
        "details": "Sweet fried dumplings soaked in sugar syrup.",
        "instructions": [
            "Prepare dough by mixing milk powder, ghee, and a little water.",
            "Shape the dough into small balls and deep fry in ghee until golden.",
            "Prepare sugar syrup by dissolving sugar in water, adding rose water and cardamom.",
            "Soak the fried balls in warm sugar syrup for 30 minutes before serving."
        ],
        "nutrition": {
            "calories": "180 kcal",
            "protein": "2g",
            "carbs": "30g",
            "fat": "8g"
        }
    },
    {
        "name": "Methi Thepla",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Fenugreek leaves", "amount": "1 cup, chopped" },
            { "name": "Wheat flour", "amount": "2 cups" },
            { "name": "Ginger", "amount": "1 inch, grated" },
            { "name": "Cumin seeds", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/4 tsp" }
        ],
        "image": "https://tse4.mm.bing.net/th?id=OIP.yK1S_2Bc-lvj-zdNBhCTegHaFM&pid=Api&P=0&h=220",
        "details": "A spiced flatbread made with fenugreek leaves.",
        "instructions": [
            "Mix wheat flour, fenugreek leaves, spices, and grated ginger with water to make a soft dough.",
            "Roll out portions of the dough into thin circles.",
            "Cook on a hot griddle until golden brown on both sides.",
            "Serve with yogurt or pickle."
        ],
        "nutrition": {
            "calories": "150 kcal",
            "protein": "5g",
            "carbs": "30g",
            "fat": "5g"
        }
    },
    {
        "name": "Baingan Bharta",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Brinjal (Eggplant)", "amount": "2 large" },
            { "name": "Onion", "amount": "2, chopped" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://www.cookwithmanali.com/wp-content/uploads/2014/08/Baingan-Bharta.jpg",
        "details": "A smoky-flavored mashed eggplant curry.",
        "instructions": [
            "Roast brinjal on an open flame until charred, then peel and mash.",
            "Heat oil in a pan, add cumin seeds, and sauté onions, ginger, and garlic.",
            "Add tomatoes, turmeric, red chili powder, and coriander powder; cook until oil separates.",
            "Add mashed brinjal, mix well, and cook for 10 minutes.",
            "Garnish with coriander leaves and serve with roti or rice."
        ],
        "nutrition": {
            "calories": "220 kcal",
            "protein": "6g",
            "carbs": "25g",
            "fat": "10g"
        }
    },
    {
        "name": "Rajasthani Gatte Ki Sabzi",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Gram Flour (Besan)", "amount": "1 cup" },
            { "name": "Yogurt", "amount": "2 cups" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Chili Powder", "amount": "1/2 tsp" },
            { "name": "Garam Masala", "amount": "1/2 tsp" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://www.nehascookbook.com/wp-content/uploads/2022/10/Gatta-curry-WS.jpg",
        "details": "A traditional Rajasthani dish made with gram flour dumplings in a spicy yogurt gravy.",
        "instructions": [
            "Make a dough with gram flour, salt, and spices; roll into cylindrical shapes and steam.",
            "Cut the steamed dough into pieces (gatte).",
            "Heat oil in a pan, sauté onions, ginger, garlic, and tomatoes. Add spices.",
            "Add yogurt to make a smooth gravy and cook until thick.",
            "Add gatte to the gravy and cook for another 10 minutes.",
            "Garnish with coriander leaves and serve with roti or rice."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "12g",
            "carbs": "35g",
            "fat": "14g"
        }
    },
    {
        "name": "Lassi",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Yogurt", "amount": "2 cups" },
            { "name": "Water", "amount": "1 cup" },
            { "name": "Sugar", "amount": "2 tbsp" },
            { "name": "Rose Water", "amount": "1 tsp" },
            { "name": "Ice", "amount": "as needed" },
            { "name": "Cardamom Powder", "amount": "1/4 tsp" }
        ],
        "image": "https://aromaticessence.co/wp-content/uploads/2022/05/rose_lassi_recipe_card.jpg",
        "details": "A refreshing yogurt-based drink, often enjoyed as a dessert or refreshment.",
        "instructions": [
            "Blend yogurt, water, and sugar until smooth.",
            "Add cardamom powder and rose water, mix well.",
            "Serve chilled with ice cubes."
        ],
        "nutrition": {
            "calories": "150 kcal",
            "protein": "5g",
            "carbs": "25g",
            "fat": "4g"
        }
    },
    {
        "name": "Dosa",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Rice", "amount": "2 cups" },
            { "name": "Urad Dal", "amount": "1 cup" },
            { "name": "Fenugreek Seeds", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Water", "amount": "as needed" },
            { "name": "Oil", "amount": "for cooking" }
        ],
        "image": "https://cdn3.foodviva.com/static-content/food-images/south-indian-recipes/dosa-recipe/dosa-recipe.jpg",
        "details": "A crispy, thin pancake made from fermented rice and lentil batter.",
        "instructions": [
            "Soak rice, urad dal, and fenugreek seeds for 6 hours, and grind into a smooth batter.",
            "Ferment the batter overnight (8-10 hours).",
            "Heat a tawa, pour batter, and spread into a thin circle.",
            "Cook until crispy and golden, flipping as needed. Serve with chutney or sambar."
        ],
        "nutrition": {
            "calories": "180 kcal",
            "protein": "5g",
            "carbs": "30g",
            "fat": "4g"
        }
    },
    {
        "name": "Bhindi Masala",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Okra (Ladyfinger)", "amount": "300g, sliced" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Chili Powder", "amount": "1/2 tsp" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcd0hFzKDPhKAkB1H-J9lB7nvc3hYkLRxpw&s",
        "details": "A dry curry made with okra, onion, and spices.",
        "instructions": [
            "Heat 1 tbsp oil in a pan and fry the sliced okra until crispy. Remove and set aside.",
            "In the same pan, add another tbsp of oil, cumin seeds, and sauté onions and garlic until golden.",
            "Add tomatoes, turmeric, coriander powder, chili powder, and salt. Cook until the tomatoes soften.",
            "Add the fried okra and toss until well coated with the spices.",
            "Garnish with coriander leaves and serve hot with roti."
        ],
        "nutrition": {
            "calories": "180 kcal",
            "protein": "4g",
            "carbs": "18g",
            "fat": "10g"
        }
    },
    {
        "name": "Matar Paneer",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Paneer", "amount": "200g, cubed" },
            { "name": "Green Peas", "amount": "1 cup" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "2, pureed" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Garam Masala", "amount": "1/2 tsp" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" }
        ],
        "image": "https://cdn3.foodviva.com/static-content/food-images/punjabi-recipes/matar-paneer-recipe/matar-paneer-recipe.jpg",
        "details": "A creamy curry made with paneer and green peas.",
        "instructions": [
            "Heat oil in a pan and add cumin seeds. Once aromatic, sauté onions, ginger, and garlic until golden.",
            "Add pureed tomatoes, turmeric, red chili powder, and coriander powder. Cook until the oil separates.",
            "Add green peas and a little water, and simmer until the peas are tender.",
            "Add cubed paneer and garam masala. Mix well and cook for 5 minutes.",
            "Garnish with coriander leaves and serve hot with naan or rice."
        ],
        "nutrition": {
            "calories": "280 kcal",
            "protein": "12g",
            "carbs": "20g",
            "fat": "18g"
        }
    },
    {
        "name": "Gobi Manchurian",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Cauliflower", "amount": "1 medium, cut into florets" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Garlic", "amount": "4 cloves, minced" },
            { "name": "Green Chilies", "amount": "2, chopped" },
            { "name": "Soy Sauce", "amount": "2 tbsp" },
            { "name": "Tomato Sauce", "amount": "2 tbsp" },
            { "name": "Corn Flour", "amount": "1/4 cup" },
            { "name": "All-purpose Flour", "amount": "1/4 cup" },
            { "name": "Rice Flour", "amount": "2 tbsp" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQos98T_cGyOgR9G21k6XfpgepI4K_F23mdMg&s",
        "details": "A crispy, tangy, and spicy cauliflower dish, often served as a starter.",
        "instructions": [
            "Prepare a batter with corn flour, all-purpose flour, rice flour, and water.",
            "Dip cauliflower florets into the batter and deep fry until golden and crispy. Set aside.",
            "In a pan, heat oil and sauté ginger, garlic, green chilies, and onions until fragrant.",
            "Add soy sauce and tomato sauce, mix well.",
            "Toss the fried cauliflower in the sauce until well coated.",
            "Garnish with coriander leaves and serve hot."
        ],
        "nutrition": {
            "calories": "200 kcal",
            "protein": "4g",
            "carbs": "30g",
            "fat": "8g"
        }
    },
    {
        "name": "Aloo Tikki",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Potato", "amount": "3, boiled and mashed" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Green Chilies", "amount": "2, minced" },
            { "name": "Ginger", "amount": "1 inch, grated" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Cumin Powder", "amount": "1 tsp" },
            { "name": "Chili Powder", "amount": "1/2 tsp" },
            { "name": "Breadcrumbs", "amount": "1/2 cup" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "for frying" }
        ],
        "image": "https://i.ytimg.com/vi/ipTEYc4xY54/maxresdefault.jpg",
        "details": "Crispy potato patties with a flavorful filling, perfect as a snack.",
        "instructions": [
            "Mix boiled potatoes with chopped onions, chilies, ginger, and spices. Adjust salt to taste.",
            "Shape the mixture into small patties and coat with breadcrumbs.",
            "Heat oil in a pan and shallow fry the tikkis until golden and crispy on both sides.",
            "Serve hot with mint chutney or tamarind sauce."
        ],
        "nutrition": {
            "calories": "220 kcal",
            "protein": "4g",
            "carbs": "30g",
            "fat": "10g"
        }
    },
    {
        "name": "Dal Makhani",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Black Lentils (Urad Dal)", "amount": "1 cup, soaked overnight" },
            { "name": "Kidney Beans (Rajma)", "amount": "1/4 cup, soaked overnight" },
            { "name": "Tomato", "amount": "3, pureed" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Garlic", "amount": "4 cloves, minced" },
            { "name": "Ginger", "amount": "1 inch, grated" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Butter", "amount": "2 tbsp" },
            { "name": "Cream", "amount": "1/4 cup" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Garam Masala", "amount": "1/2 tsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQheP2bGltpFCajyA-f0f_lU82AfUv0yivEZw&s",
        "details": "A rich and creamy dal made with black lentils and kidney beans.",
        "instructions": [
            "Cook soaked black lentils and kidney beans in a pressure cooker until soft. Set aside.",
            "Heat butter in a pan and sauté onions, garlic, and ginger until golden.",
            "Add pureed tomatoes, turmeric, coriander powder, and garam masala. Cook until the oil separates.",
            "Add the cooked lentils and beans to the gravy. Simmer for 20 minutes.",
            "Stir in cream and cook for another 5 minutes. Serve hot with naan or rice."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "15g",
            "carbs": "60g",
            "fat": "18g"
        }
    },
    {
        "name": "Vegetable Biryani",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Rice", "amount": "2 cups" },
            { "name": "Carrot", "amount": "1, diced" },
            { "name": "Green Beans", "amount": "1/2 cup, chopped" },
            { "name": "Peas", "amount": "1/2 cup" },
            { "name": "Onion", "amount": "1, sliced" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Garam Masala", "amount": "1/2 tsp" },
            { "name": "Cinnamon Stick", "amount": "1" },
            { "name": "Cloves", "amount": "3" },
            { "name": "Mint Leaves", "amount": "2 tbsp, chopped" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbQMgD79WJwULTkrE5C-MsHcUMyKozMq-Kw&s",
        "details": "A fragrant rice dish made with mixed vegetables and aromatic spices.",
        "instructions": [
            "Heat oil in a pan, add cumin seeds, cinnamon stick, and cloves. Sauté until aromatic.",
            "Add onions, ginger, garlic, and chopped tomatoes. Cook until soft.",
            "Add carrots, beans, peas, and spices. Mix well.",
            "Cook rice separately until 70% done. Layer the vegetables and rice in a pot.",
            "Cover and cook on low heat for 10-15 minutes. Garnish with mint and coriander leaves before serving."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "8g",
            "carbs": "65g",
            "fat": "12g"
        }
    },
    {
        "name": "Tandoori Chicken",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Chicken", "amount": "500g, cleaned" },
            { "name": "Yogurt", "amount": "1/2 cup" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Garlic", "amount": "4 cloves, minced" },
            { "name": "Cumin Powder", "amount": "1 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Garam Masala", "amount": "1/2 tsp" },
            { "name": "Lemon Juice", "amount": "1 tbsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "1 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzenyao0rtB5G8lT5luyYbQJe0ko37Ei_-A&s",
        "details": "A smoky and flavorful chicken dish marinated in yogurt and spices.",
        "instructions": [
            "Make a marinade with yogurt, ginger, garlic, cumin powder, coriander powder, red chili powder, garam masala, turmeric, lemon juice, salt, and oil.",
            "Coat the chicken pieces with the marinade and refrigerate for at least 2 hours.",
            "Preheat the oven to 400°F (200°C) and bake the chicken for 30-35 minutes, turning halfway through.",
            "Serve hot with naan or rice and a side of cucumber salad."
        ],
        "nutrition": {
            "calories": "250 kcal",
            "protein": "20g",
            "carbs": "6g",
            "fat": "15g"
        }
    },
    {
        "name": "Palak Pakora",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Spinach", "amount": "1 bunch, chopped" },
            { "name": "Gram Flour (Besan)", "amount": "1 cup" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Cumin Seeds", "amount": "1/2 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Green Chilies", "amount": "2, minced" },
            { "name": "Ginger", "amount": "1 inch, grated" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "for frying" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1NbTZUC_OniY7xdMfAFWPfEjwsfm9EEnhg&s",
        "details": "Crispy spinach fritters, perfect for snacking.",
        "instructions": [
            "Mix gram flour with spinach, onions, green chilies, ginger, cumin seeds, and spices. Add a little water to make a thick batter.",
            "Heat oil in a pan. Drop small portions of the batter into the hot oil.",
            "Fry until golden and crispy. Drain excess oil on paper towels.",
            "Serve hot with mint or tamarind chutney."
        ],
        "nutrition": {
            "calories": "150 kcal",
            "protein": "4g",
            "carbs": "20g",
            "fat": "8g"
        }
    },
    {
        "name": "Chole",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Chickpeas (Chana)", "amount": "1 cup, soaked overnight" },
            { "name": "Onion", "amount": "2, finely chopped" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Green Chilies", "amount": "2, chopped" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Garam Masala", "amount": "1/2 tsp" },
            { "name": "Lemon Juice", "amount": "1 tbsp" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfnw1l_uSSdCj5O1z96A8_dcajO60A8ecR2g&s",
        "details": "A hearty and spicy curry made with chickpeas, perfect with rice or bhature.",
        "instructions": [
            "Cook soaked chickpeas in a pressure cooker until tender. Set aside.",
            "Heat oil in a pan, add cumin seeds, and sauté onions, ginger, garlic, and green chilies until golden.",
            "Add chopped tomatoes, turmeric, red chili powder, and salt. Cook until the oil separates.",
            "Mix in the cooked chickpeas and simmer for 10 minutes.",
            "Garnish with coriander leaves and lemon juice. Serve hot with rice or bhature."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "14g",
            "carbs": "60g",
            "fat": "10g"
        }
    },
    {
        "name": "Aloo Methi",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Potato", "amount": "3, diced" },
            { "name": "Fenugreek Leaves (Methi)", "amount": "1 cup, chopped" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Green Chilies", "amount": "2, chopped" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjC3oqn2AgR3ETmqmwBTqtyQeqK8eBYNwBew&s",
        "details": "A delicious dry curry made with potatoes and fenugreek leaves.",
        "instructions": [
            "Heat oil in a pan and add cumin seeds. Sauté until aromatic.",
            "Add chopped onions, garlic, and green chilies. Cook until golden brown.",
            "Add diced potatoes, turmeric, coriander powder, red chili powder, and salt. Mix well.",
            "Cook covered on low heat until the potatoes are tender.",
            "Stir in fenugreek leaves and cook for 5 more minutes.",
            "Serve hot with roti or paratha."
        ],
        "nutrition": {
            "calories": "250 kcal",
            "protein": "6g",
            "carbs": "30g",
            "fat": "8g"
        }
    },
    {
        "name": "Vegetable Pulao",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Rice", "amount": "2 cups" },
            { "name": "Carrot", "amount": "1, diced" },
            { "name": "Peas", "amount": "1/2 cup" },
            { "name": "Green Beans", "amount": "1/2 cup, chopped" },
            { "name": "Onion", "amount": "1, sliced" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Green Chilies", "amount": "2, chopped" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Garam Masala", "amount": "1/2 tsp" },
            { "name": "Cinnamon Stick", "amount": "1" },
            { "name": "Cloves", "amount": "3" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXh8JwS9wEk8r2un31eZJtUqoEIveNLTHibg&s",
        "details": "A fragrant rice dish made with mixed vegetables and spices.",
        "instructions": [
            "Heat oil in a pot, add cumin seeds, cinnamon stick, and cloves. Sauté until aromatic.",
            "Add sliced onions, ginger, garlic, and green chilies. Cook until soft.",
            "Add chopped carrots, beans, and peas. Stir in coriander powder, garam masala, and salt.",
            "Add washed rice and mix well with the vegetables.",
            "Pour in water (double the rice quantity), cover, and cook on low heat until rice is done.",
            "Fluff the rice with a fork and serve hot."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "7g",
            "carbs": "65g",
            "fat": "8g"
        }
    },
    {
        "name": "Aloo Paratha",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Potato", "amount": "3, boiled and mashed" },
            { "name": "Wheat Flour", "amount": "2 cups" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "for cooking" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMixNaYJgRUbuVX4UHm3jsYDkxzwpY5J1nQ&s",
        "details": "A stuffed flatbread made with spiced mashed potatoes.",
        "instructions": [
            "Make a dough with wheat flour, water, and salt. Roll into small balls.",
            "Prepare the filling by mixing boiled mashed potatoes with onions, spices, and chopped coriander leaves.",
            "Stuff each ball with the spiced mashed potatoes and roll out into flat discs.",
            "Cook on a hot tawa, applying oil on both sides, until golden brown."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "8g",
            "carbs": "45g",
            "fat": "10g"
        }
    },
    {
        "name": "Tandoori Paneer",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Paneer (Cottage Cheese)", "amount": "250g, cubed" },
            { "name": "Yogurt", "amount": "1/2 cup" },
            { "name": "Garam Masala", "amount": "1 tsp" },
            { "name": "Chili Powder", "amount": "1/2 tsp" },
            { "name": "Cumin Powder", "amount": "1 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/4 tsp" },
            { "name": "Lemon Juice", "amount": "1 tbsp" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "for greasing" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumCnlpqPJHWQTNkdxeJyJRsl79lrVEKcGlA&s",
        "details": "Paneer cubes marinated in yogurt and spices, then grilled to perfection.",
        "instructions": [
            "Mix yogurt, garam masala, chili powder, cumin powder, coriander powder, turmeric, lemon juice, and salt to make a marinade.",
            "Coat paneer cubes in the marinade and refrigerate for at least 30 minutes.",
            "Grill or bake the marinated paneer at 180°C (350°F) for 20-25 minutes, until golden and charred.",
            "Serve hot with coriander leaves and a side of mint chutney."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "25g",
            "carbs": "15g",
            "fat": "25g"
        }
    },
    {
        "name": "Lauki (Bottle Gourd) Curry",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Bottle Gourd (Sorakaya)", "amount": "1 medium, peeled and chopped" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOTXORFAd8k5vtvOTDSFjMbBuWiRHsaEOike9egYXvwTnVEfjKI-D-h6p9HPKD6-x9DA&usqp=CAU",
        "details": "A light, nutritious curry made with bottle gourd in a spiced gravy.",
        "instructions": [
            "Heat oil in a pan, add cumin seeds, and sauté onions, garlic, and ginger until soft.",
            "Add chopped tomatoes, turmeric, red chili powder, and coriander powder. Cook until soft.",
            "Add chopped bottle gourd and cook for 5 minutes.",
            "Add water to make the gravy and cook until the bottle gourd is tender.",
            "Serve hot with rice or roti."
        ],
        "nutrition": {
            "calories": "150 kcal",
            "protein": "5g",
            "carbs": "25g",
            "fat": "6g"
        }
    },
    {
        "name": "Gajar Halwa",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Carrot", "amount": "3, grated" },
            { "name": "Milk", "amount": "2 cups" },
            { "name": "Sugar", "amount": "1/2 cup" },
            { "name": "Ghee", "amount": "2 tbsp" },
            { "name": "Cardamom", "amount": "1/4 tsp" },
            { "name": "Almonds", "amount": "2 tbsp, chopped" },
            { "name": "Cashews", "amount": "2 tbsp, chopped" }
        ],
        "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Gajar-Ka-Halwa-2.jpg",
        "details": "A rich and delicious dessert made with grated carrots and milk.",
        "instructions": [
            "Grate carrots and cook in ghee until soft and slightly caramelized.",
            "Add milk and sugar to the carrots, and cook on medium heat until thickened.",
            "Finish with cardamom, almonds, and cashews. Stir well and cook for a few more minutes.",
            "Serve warm as a dessert."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "6g",
            "carbs": "45g",
            "fat": "12g"
        }
    },
    {
        "name": "Tamarind Rice",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Rice", "amount": "2 cups, cooked" },
            { "name": "Tamarind Paste", "amount": "2 tbsp" },
            { "name": "Mustard Seeds", "amount": "1 tsp" },
            { "name": "Chili Powder", "amount": "1 tsp" },
            { "name": "Curry Leaves", "amount": "6-8 leaves" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://www.yummefy.com/uploads/1586349154Tamarind-Rice-Yummefy.jpg",
        "details": "A tangy rice dish flavored with tamarind and spices.",
        "instructions": [
            "Cook rice and set aside to cool.",
            "Heat oil in a pan, add mustard seeds, curry leaves, garlic, and chili powder.",
            "Add tamarind paste and water, cook for 2-3 minutes to blend the flavors.",
            "Mix the rice with the tamarind paste mixture and toss well.",
            "Garnish with chopped coriander leaves and serve hot."
        ],
        "nutrition": {
            "calories": "200 kcal",
            "protein": "5g",
            "carbs": "35g",
            "fat": "8g"
        }
    },
    {
        "name": "Cabbage Sabzi",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Cabbage", "amount": "2 cups, shredded" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Garam Masala", "amount": "1 tsp" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pCWLBqyIUpwgbkRJUcvgu1eBvnqD0WrC7Q&s",
        "details": "A simple stir-fried cabbage dish with onions and tomatoes.",
        "instructions": [
            "Heat oil in a pan and sauté onions, garlic, and ginger until soft.",
            "Add chopped tomatoes and cook until soft.",
            "Add shredded cabbage, turmeric, chili powder, and garam masala. Stir well.",
            "Cook until cabbage is tender, and garnish with coriander leaves."
        ],
        "nutrition": {
            "calories": "120 kcal",
            "protein": "3g",
            "carbs": "20g",
            "fat": "5g"
        }
    },
    {
        "name": "Methi Malai Murg",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Chicken", "amount": "500g, cubed" },
            { "name": "Fenugreek Leaves (Methi)", "amount": "1 cup" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Garlic", "amount": "4 cloves, minced" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Cream", "amount": "1/2 cup" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Garam Masala", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnbHHbRWl27IJzUPYbGX6bPZG8mWvNUFKlg&s",
        "details": "A rich and creamy chicken dish cooked with fenugreek leaves.",
        "instructions": [
            "Marinate chicken with coriander powder, turmeric, cumin, and salt for 30 minutes.",
            "Heat oil in a pan, sauté onions, garlic, and ginger until golden brown.",
            "Add marinated chicken and cook until browned.",
            "Add cream and methi leaves, cook until chicken is fully done and creamy.",
            "Serve hot, garnished with coriander leaves."
        ],
        "nutrition": {
            "calories": "450 kcal",
            "protein": "30g",
            "carbs": "10g",
            "fat": "30g"
        }
    },
    {
        "name": "Palak Chaat",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Spinach (Palak)", "amount": "2 cups, washed" },
            { "name": "Yogurt", "amount": "1 cup" },
            { "name": "Chickpea Flour", "amount": "1/4 cup" },
            { "name": "Cumin Powder", "amount": "1/2 tsp" },
            { "name": "Chili Powder", "amount": "1/2 tsp" },
            { "name": "Tamarind Paste", "amount": "2 tbsp" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "for frying" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuscqEc1X2ua67mbvRGpu5080nrPMjQtgQIA&s",
        "details": "A crispy spinach snack served with yogurt and tamarind chutney.",
        "instructions": [
            "Fry spinach leaves in hot oil until crispy and golden.",
            "In a small bowl, prepare tamarind chutney with tamarind paste, sugar, and salt.",
            "Serve the crispy spinach leaves topped with yogurt, tamarind chutney, cumin powder, chili powder, and chopped coriander."
        ],
        "nutrition": {
            "calories": "180 kcal",
            "protein": "4g",
            "carbs": "25g",
            "fat": "10g"
        }
    },
    {
        "name": "Ridge Gourd Stir Fry",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Ridge Gourd (Turai)", "amount": "2 medium, chopped" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Curry Leaves", "amount": "6-8 leaves" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Chili Powder", "amount": "1/2 tsp" },
            { "name": "Garam Masala", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIY_Hnzl5UJDJzKDHBPTFL3nlJp8zq_mpzg&s",
        "details": "A simple stir fry made with ridge gourd, flavored with Indian spices.",
        "instructions": [
            "Heat oil in a pan, add cumin seeds and curry leaves, and sauté for a minute.",
            "Add chopped onions and tomatoes, cook until soft.",
            "Add chopped ridge gourd, turmeric, chili powder, and garam masala. Stir well.",
            "Cook until ridge gourd is tender. Serve hot."
        ],
        "nutrition": {
            "calories": "140 kcal",
            "protein": "3g",
            "carbs": "20g",
            "fat": "6g"
        }
    },
    {
        "name": "Dum Aloo",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Potato", "amount": "4, boiled and peeled" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Garam Masala", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHeOXP8xfRu8lNEqbv9SucZP6k59SWTKt7w&s",
        "details": "A slow-cooked, spiced potato curry served with rice or roti.",
        "instructions": [
            "Fry boiled potatoes in hot oil until golden and set aside.",
            "In the same pan, heat oil and sauté onions, garlic, and ginger until golden brown.",
            "Add chopped tomatoes and cook until soft.",
            "Add potatoes and spices. Mix well and cook covered on low heat for 20 minutes.",
            "Serve hot with roti or rice."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "5g",
            "carbs": "50g",
            "fat": "12g"
        }
    },
    {
        "name": "Mushroom Masala",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Mushrooms", "amount": "200g, sliced" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Chili Powder", "amount": "1/2 tsp" },
            { "name": "Garam Masala", "amount": "1/2 tsp" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLGIdiSVEmFH4h2AgNn0inEgiHkLuA1Vy4g&s",
        "details": "Mushrooms cooked in a rich, spiced tomato gravy.",
        "instructions": [
            "Heat oil in a pan, add cumin seeds, and sauté onions, garlic, and ginger until golden.",
            "Add chopped tomatoes and cook until soft.",
            "Add sliced mushrooms, turmeric, chili powder, coriander powder, and garam masala. Mix well.",
            "Cook until mushrooms release their water and simmer for a few minutes.",
            "Garnish with coriander leaves and serve hot with naan or roti."
        ],
        "nutrition": {
            "calories": "200 kcal",
            "protein": "7g",
            "carbs": "15g",
            "fat": "12g"
        }
    },
    {
        "name": "Cucumber Raita",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Cucumber", "amount": "1, grated" },
            { "name": "Yogurt", "amount": "1 cup" },
            { "name": "Cumin Powder", "amount": "1/2 tsp" },
            { "name": "Chili Powder", "amount": "1/4 tsp" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Mint Leaves", "amount": "2 tbsp, chopped" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp73TNJXumQP_gPRlp5bYMIXLYJv1pEpWDlQ&s",
        "details": "A cooling yogurt side dish with fresh cucumber and spices.",
        "instructions": [
            "Grate the cucumber and squeeze out excess water.",
            "Mix grated cucumber with yogurt in a bowl.",
            "Add cumin powder, chili powder, salt, and chopped mint and coriander leaves.",
            "Serve chilled as a side dish."
        ],
        "nutrition": {
            "calories": "100 kcal",
            "protein": "5g",
            "carbs": "10g",
            "fat": "5g"
        }
    },
    {
        "name": "Masoor Dal Tadka",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Red Lentils (Masoor Dal)", "amount": "1 cup" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Garam Masala", "amount": "1/2 tsp" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxqnmjyeZNYUZoH1Ln8r8nOJ1djmhzq3jcw&s",
        "details": "A spiced yellow lentil curry tempered with cumin and garlic.",
        "instructions": [
            "Cook the masoor dal with water and turmeric in a pot or pressure cooker until soft.",
            "Heat oil in a pan, add cumin seeds, and sauté onions, garlic, and ginger until golden brown.",
            "Add chopped tomatoes, red chili powder, and garam masala. Cook until soft.",
            "Pour the tadka over the cooked dal and simmer for 5 minutes.",
            "Garnish with coriander leaves and serve with rice or roti."
        ],
        "nutrition": {
            "calories": "250 kcal",
            "protein": "12g",
            "carbs": "35g",
            "fat": "8g"
        }
    },
    {
        "name": "Pulao",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Rice", "amount": "1.5 cups" },
            { "name": "Onion", "amount": "1, sliced" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Cinnamon", "amount": "1 stick" },
            { "name": "Cloves", "amount": "3" },
            { "name": "Cardamom", "amount": "2 pods" },
            { "name": "Bay Leaves", "amount": "2" },
            { "name": "Carrot", "amount": "1, diced" },
            { "name": "Peas", "amount": "1/2 cup" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGews0aAFGlX81V-AEVfc2WQs1LDFm8yOMg&s",
        "details": "A fragrant rice dish cooked with vegetables and whole spices.",
        "instructions": [
            "Heat oil in a pot and sauté onions, ginger, garlic, and whole spices (cumin seeds, cinnamon, cloves, cardamom, and bay leaves) until aromatic.",
            "Add tomatoes, carrots, and peas, and cook for 3-4 minutes.",
            "Add rice, water (double the quantity of rice), and salt. Stir well.",
            "Cook covered on low heat until the rice is tender.",
            "Fluff with a fork and serve hot with curry or raita."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "6g",
            "carbs": "55g",
            "fat": "8g"
        }
    },
    {
        "name": "Pineapple Raita",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Pineapple", "amount": "1 cup, chopped" },
            { "name": "Yogurt", "amount": "1.5 cups" },
            { "name": "Cucumber", "amount": "1/2 cup, chopped" },
            { "name": "Coriander Powder", "amount": "1/2 tsp" },
            { "name": "Cumin Powder", "amount": "1/2 tsp" },
            { "name": "Chili Powder", "amount": "1/4 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vfzUFMSDEYU2rbHvBdIAuGgXUhuZpzinNw&s",
        "details": "A sweet and tangy yogurt-based side dish with pineapple.",
        "instructions": [
            "Chop pineapple and cucumber into small pieces.",
            "In a mixing bowl, whisk yogurt until smooth.",
            "Add pineapple, cucumber, coriander powder, cumin powder, chili powder, and salt. Mix well.",
            "Garnish with coriander leaves and serve chilled."
        ],
        "nutrition": {
            "calories": "150 kcal",
            "protein": "5g",
            "carbs": "30g",
            "fat": "2g"
        }
    },
    {
        "name": "Tinda Masala",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Tinda (Indian Round Gourd)", "amount": "300g, peeled and chopped" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Chili Powder", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" }
        ],
        "image": "https://www.shanazrafiq.com/wp-content/uploads/2018/09/Punjabi-Tinda-Masala-5.jpg",
        "details": "A spiced curry made with tinda, cooked in a tangy tomato gravy.",
        "instructions": [
            "Heat oil in a pan, add cumin seeds, and sauté until aromatic.",
            "Add chopped onions and cook until golden brown.",
            "Add tomatoes, coriander powder, turmeric, chili powder, and salt. Cook until the tomatoes soften.",
            "Add chopped tinda, mix well, and cook covered until tender.",
            "Garnish with coriander leaves and serve with roti or rice."
        ],
        "nutrition": {
            "calories": "150 kcal",
            "protein": "4g",
            "carbs": "25g",
            "fat": "8g"
        }
    },
    {
        "name": "Matar Pulao",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Basmati Rice", "amount": "1.5 cups" },
            { "name": "Peas", "amount": "1 cup" },
            { "name": "Onion", "amount": "1, sliced" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Cloves", "amount": "3" },
            { "name": "Cinnamon", "amount": "1 stick" },
            { "name": "Cardamom", "amount": "2 pods" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" }
        ],
        "image": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Donna_George/Matar_Pulao_Peas_Pulao_Recipe-1.jpg",
        "details": "A simple, flavorful rice dish made with peas and aromatic spices.",
        "instructions": [
            "Heat oil in a pan, add cumin seeds, cloves, cinnamon, and cardamom. Sauté until aromatic.",
            "Add sliced onions and cook until golden brown.",
            "Add basmati rice, peas, water (double the rice quantity), and salt. Mix well.",
            "Cook covered on low heat until the rice is tender.",
            "Garnish with coriander leaves and serve hot with curry or yogurt."
        ],
        "nutrition": {
            "calories": "220 kcal",
            "protein": "6g",
            "carbs": "45g",
            "fat": "7g"
        }
    },
    {
        "name": "Kachumber Salad",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Cucumber", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Green Chilies", "amount": "2, finely chopped" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" },
            { "name": "Lemon Juice", "amount": "1 tbsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Black Pepper", "amount": "1/2 tsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8YZLvz3h6wdQsR7qbuedJ3c89O67DGlv2g&s",
        "details": "A refreshing and tangy Indian salad made with raw vegetables.",
        "instructions": [
            "Chop cucumbers, tomatoes, and onions into small pieces.",
            "Add green chilies, lemon juice, salt, and black pepper to the chopped vegetables.",
            "Toss well and garnish with chopped coriander leaves before serving."
        ],
        "nutrition": {
            "calories": "80 kcal",
            "protein": "2g",
            "carbs": "15g",
            "fat": "2g"
        }
    },
    {
        "name": "Matar Kachori",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Green Peas", "amount": "1 cup, mashed" },
            { "name": "Wheat Flour", "amount": "2 cups" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Spices (Coriander Powder, Chili Powder)", "amount": "1 tsp each" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "for frying" }
        ],
        "image": "https://redchillycurry.com/wp-content/uploads/2016/11/matarka.jpg",
        "details": "A crispy fried pastry stuffed with spiced green peas filling.",
        "instructions": [
            "Prepare a dough using wheat flour, water, and a pinch of salt. Set aside.",
            "Heat oil in a pan, add cumin seeds, mashed green peas, minced ginger, and spices. Cook for 3-4 minutes.",
            "Stuff the pea mixture into small portions of the dough, seal, and roll flat.",
            "Deep fry the kachoris in hot oil until golden brown. Serve hot with mint or tamarind chutney."
        ],
        "nutrition": {
            "calories": "220 kcal",
            "protein": "6g",
            "carbs": "32g",
            "fat": "8g"
        }
    },
    {
        "name": "Kaddu ki Sabzi",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Pumpkin", "amount": "2 cups, diced" },
            { "name": "Mustard Seeds", "amount": "1 tsp" },
            { "name": "Curry Leaves", "amount": "6-8 leaves" },
            { "name": "Jaggery", "amount": "1 tbsp, grated" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVchDQozm-3cE4zzH_W39--KjAIWYNmsGyyg&s",
        "details": "A sweet and tangy pumpkin curry, a popular dish in Indian households.",
        "instructions": [
            "Heat oil in a pan and crackle mustard seeds and curry leaves.",
            "Add diced pumpkin, jaggery, turmeric, chili powder, coriander powder, and salt. Mix well.",
            "Cover and cook on low heat until the pumpkin is tender.",
            "Serve hot with puri or chapati."
        ],
        "nutrition": {
            "calories": "180 kcal",
            "protein": "4g",
            "carbs": "28g",
            "fat": "6g"
        }
    },
    {
        "name": "Pindi Chole",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Chickpeas", "amount": "1.5 cups, soaked overnight" },
            { "name": "Tea Bag", "amount": "1" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Chole Masala", "amount": "2 tbsp" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKpdKXlQvSM-s_LcJPAQ2lOSyKJiLcdWaFA&s",
        "details": "A dry and tangy chickpea dish, originating from Punjab.",
        "instructions": [
            "Boil soaked chickpeas with a tea bag in a pressure cooker until soft. Discard the tea bag and set the chickpeas aside.",
            "Heat oil in a pan, sauté onions, garlic, and ginger until golden.",
            "Add chopped tomatoes, chole masala, and salt. Cook until the oil separates.",
            "Mix in the boiled chickpeas and cook on low heat until the dish is dry.",
            "Serve hot with naan or kulcha."
        ],
        "nutrition": {
            "calories": "200 kcal",
            "protein": "8g",
            "carbs": "30g",
            "fat": "5g"
        }
    },
    {
        "name": "Lauki Kofta",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Bottle Gourd", "amount": "2 cups, grated" },
            { "name": "Gram Flour (Besan)", "amount": "1 cup" },
            { "name": "Tomatoes", "amount": "2, pureed" },
            { "name": "Onions", "amount": "1, chopped" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Garam Masala", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "for frying and cooking" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvcx47ENr1m75G-IhH0XgNPMgNePBvBkYCQ&s",
        "details": "Soft bottle gourd dumplings served in a rich tomato-onion gravy.",
        "instructions": [
            "Grate bottle gourd and squeeze out excess water. Mix with gram flour, turmeric, chili powder, and salt to form a dough.",
            "Shape into small balls and deep fry until golden. Set aside.",
            "Heat oil in a pan, sauté cumin seeds and onions until golden.",
            "Add tomato puree, turmeric, chili powder, garam masala, and salt. Cook until the oil separates.",
            "Add water to adjust consistency, then gently add the fried koftas. Simmer briefly.",
            "Serve hot with rice or roti."
        ],
        "nutrition": {
            "calories": "250 kcal",
            "protein": "6g",
            "carbs": "22g",
            "fat": "15g"
        }
    },
    {
        "name": "Gatte ki Sabzi",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Gram Flour (Besan)", "amount": "1 cup" },
            { "name": "Yogurt", "amount": "1 cup" },
            { "name": "Mustard Seeds", "amount": "1 tsp" },
            { "name": "Curry Leaves", "amount": "6-8 leaves" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBg9QU2Oue82yWNokYRfX8eU-8FvFleuwTA&s",
        "details": "A Rajasthani curry made with spiced gram flour dumplings in a yogurt gravy.",
        "instructions": [
            "Mix gram flour, salt, turmeric, and chili powder with water to form a dough.",
            "Roll the dough into logs, boil in water until cooked, and cut into pieces.",
            "Heat oil in a pan, crackle mustard seeds, and curry leaves. Add yogurt mixed with spices and cook until thick.",
            "Add the gram flour dumplings and simmer for 5 minutes.",
            "Serve hot with roti or rice."
        ],
        "nutrition": {
            "calories": "220 kcal",
            "protein": "8g",
            "carbs": "25g",
            "fat": "8g"
        }
    },
    {
        "name": "Malai Kofta",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Paneer", "amount": "1 cup, grated" },
            { "name": "Potatoes", "amount": "2, boiled and mashed" },
            { "name": "Cashews", "amount": "2 tbsp, soaked and blended" },
            { "name": "Cream", "amount": "1/4 cup" },
            { "name": "Tomatoes", "amount": "3, pureed" },
            { "name": "Garam Masala", "amount": "1/2 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "for frying and cooking" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevgct2P6KvIg8tK-MQ_2yJJI4-pI8aBVn7A&s",
        "details": "Soft paneer and potato dumplings served in a creamy tomato-based gravy.",
        "instructions": [
            "Mix grated paneer, mashed potatoes, salt, and a pinch of chili powder. Shape into balls and deep fry until golden.",
            "Heat oil in a pan, add tomato puree, cashew paste, turmeric, chili powder, garam masala, and salt. Cook until the oil separates.",
            "Add cream to the gravy and simmer for 2 minutes.",
            "Gently add the koftas and cook for 1-2 minutes before serving.",
            "Serve hot with naan or paratha."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "10g",
            "carbs": "20g",
            "fat": "18g"
        }
    },
    {
        "name": "Besan Chilla",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Gram Flour (Besan)", "amount": "1 cup" },
            { "name": "Onions", "amount": "1, finely chopped" },
            { "name": "Tomatoes", "amount": "1, finely chopped" },
            { "name": "Green Chilies", "amount": "2, finely chopped" },
            { "name": "Cumin Seeds", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "for cooking" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60d_sotxxBu8RwObleFA5H_ozXmHRYrs9OQ&s",
        "details": "A savory gram flour pancake, perfect for breakfast or snacks.",
        "instructions": [
            "Mix gram flour, water, chopped onions, tomatoes, green chilies, cumin seeds, and salt to form a smooth batter.",
            "Heat a griddle, spread a ladle of the batter into a thin circle.",
            "Cook on both sides with a little oil until golden brown.",
            "Serve hot with chutney or yogurt."
        ],
        "nutrition": {
            "calories": "150 kcal",
            "protein": "6g",
            "carbs": "20g",
            "fat": "4g"
        }
    },
    {
        "name": "Vegetable Thai Red Curry",
        "dietary": "Vegan",
        "ingredients": [
            { "name": "Red Curry Paste", "amount": "3 tbsp" },
            { "name": "Coconut Milk", "amount": "1 can (400 ml)" },
            { "name": "Mixed Vegetables", "amount": "2 cups (carrots, bell peppers, broccoli)" },
            { "name": "Basil Leaves", "amount": "1/4 cup, fresh" },
            { "name": "Tofu", "amount": "200g, cubed" },
            { "name": "Oil", "amount": "1 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_lqAN20Oi9z95mIJWHb4Lf-wiyMdSr5uYA&s",
        "details": "A spicy and flavorful Thai curry made with fresh vegetables and tofu.",
        "instructions": [
            "Heat oil in a pan and sauté the red curry paste until aromatic.",
            "Add coconut milk and bring to a simmer.",
            "Stir in the mixed vegetables and tofu, and cook until the vegetables are tender.",
            "Garnish with fresh basil leaves and serve hot with jasmine rice."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "10g",
            "carbs": "30g",
            "fat": "25g"
        }
    },
    {
        "name": "Beef Stroganoff",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Beef Strips", "amount": "500g" },
            { "name": "Mushrooms", "amount": "1 cup, sliced" },
            { "name": "Sour Cream", "amount": "1/2 cup" },
            { "name": "Onion", "amount": "1, sliced" },
            { "name": "Egg Noodles", "amount": "200g, cooked" },
            { "name": "Beef Broth", "amount": "1 cup" },
            { "name": "Oil", "amount": "1 tbsp" }
        ],
        "image": "https://cookingwithcocktailrings.com/wp-content/uploads/2023/01/Beef-Stroganoff-over-Egg-Noodles-73.jpg",
        "details": "A creamy and savory dish with tender beef and mushrooms served over noodles.",
        "instructions": [
            "Heat oil in a pan and sear the beef strips until browned. Remove and set aside.",
            "In the same pan, sauté onions and mushrooms until softened.",
            "Add beef broth and simmer for 5 minutes.",
            "Stir in sour cream and return the beef strips to the pan. Simmer for 3-5 minutes.",
            "Serve hot over cooked egg noodles."
        ],
        "nutrition": {
            "calories": "500 kcal",
            "protein": "30g",
            "carbs": "40g",
            "fat": "20g"
        }
    },
    {
        "name": "Caprese Sandwich",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Mozzarella", "amount": "100g, sliced" },
            { "name": "Tomato", "amount": "1 large, sliced" },
            { "name": "Basil Leaves", "amount": "10 leaves, fresh" },
            { "name": "Ciabatta Bread", "amount": "2 slices" },
            { "name": "Balsamic Glaze", "amount": "1 tbsp" },
            { "name": "Olive Oil", "amount": "1 tsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKepVDDmyn3N96tzD86EvRT19kYQMvzw2z-w&s",
        "details": "A fresh and tangy Italian sandwich with basil, tomato, and mozzarella.",
        "instructions": [
            "Slice mozzarella and tomato into thin pieces.",
            "Layer mozzarella, tomato, and basil leaves on ciabatta bread.",
            "Drizzle with balsamic glaze and olive oil.",
            "Grill the sandwich lightly on a pan or serve cold."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "15g",
            "carbs": "30g",
            "fat": "18g"
        }
    },
    {
        "name": "Lemon Herb Grilled Fish",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Fish Fillets", "amount": "2 (300g)" },
            { "name": "Lemon Juice", "amount": "2 tbsp" },
            { "name": "Garlic", "amount": "2 cloves, minced" },
            { "name": "Parsley", "amount": "2 tbsp, chopped" },
            { "name": "Olive Oil", "amount": "1 tbsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Black Pepper", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqDbvc7I1dxxNvtbQa6pKg9wEYCRGZDEOig&s",
        "details": "A light and zesty grilled fish recipe perfect for summer meals.",
        "instructions": [
            "Marinate the fish fillets with lemon juice, minced garlic, parsley, salt, and black pepper for 15 minutes.",
            "Heat a grill pan and lightly grease with olive oil.",
            "Grill the fish on medium heat for 4-5 minutes on each side until cooked through.",
            "Serve hot with a side of roasted vegetables or salad."
        ],
        "nutrition": {
            "calories": "200 kcal",
            "protein": "25g",
            "carbs": "2g",
            "fat": "10g"
        }
    },
    {
        "name": "Vegetarian Sushi Rolls",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Sushi Rice", "amount": "1 cup, cooked" },
            { "name": "Seaweed (Nori)", "amount": "4 sheets" },
            { "name": "Cucumber", "amount": "1, julienned" },
            { "name": "Avocado", "amount": "1, sliced" },
            { "name": "Carrot", "amount": "1, julienned" },
            { "name": "Rice Vinegar", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReSjTliFBSWcij6eTjB0SZbpUBJAa9Bjz4Aw&s",
        "details": "Healthy and easy homemade sushi rolls with fresh vegetables.",
        "instructions": [
            "Cook sushi rice according to package instructions and mix with rice vinegar.",
            "Place a sheet of nori on a sushi mat and spread rice evenly over it.",
            "Arrange cucumber, avocado, and carrot slices along one edge.",
            "Roll tightly using the mat, slice into pieces, and serve with soy sauce."
        ],
        "nutrition": {
            "calories": "250 kcal",
            "protein": "5g",
            "carbs": "40g",
            "fat": "8g"
        }
    },
    {
        "name": "Spaghetti Carbonara",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Spaghetti", "amount": "200g" },
            { "name": "Eggs", "amount": "2, beaten" },
            { "name": "Parmesan Cheese", "amount": "1/2 cup, grated" },
            { "name": "Pancetta", "amount": "100g, diced" },
            { "name": "Black Pepper", "amount": "to taste" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKe9Mv9rG7YetHRLBgYFUQLO-mlYImXTlt9g&s",
        "details": "A classic Italian pasta dish made with eggs, cheese, and pancetta.",
        "instructions": [
            "Cook spaghetti in salted water until al dente. Reserve some pasta water and drain the rest.",
            "In a pan, fry pancetta until crispy.",
            "Mix beaten eggs and Parmesan cheese in a bowl.",
            "Add hot spaghetti to the pan with pancetta, remove from heat, and stir in the egg mixture.",
            "Thin with reserved pasta water if needed. Season with black pepper and serve."
        ],
        "nutrition": {
            "calories": "450 kcal",
            "protein": "18g",
            "carbs": "55g",
            "fat": "15g"
        }
    },
    {
        "name": "Creamy Tomato Basil Soup",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Tomatoes", "amount": "4 large, chopped" },
            { "name": "Cream", "amount": "1/2 cup" },
            { "name": "Basil", "amount": "1/4 cup, chopped" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Olive Oil", "amount": "2 tbsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Black Pepper", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfKbsfCa8Y1-51f90AiJQKU80AIUvw-d6RA&s",
        "details": "A rich and creamy soup perfect for a cozy day.",
        "instructions": [
            "Heat olive oil in a pot and sauté onions and garlic until softened.",
            "Add chopped tomatoes, salt, and pepper. Cook until the tomatoes are soft.",
            "Blend the mixture until smooth. Return to the pot and add cream and basil.",
            "Simmer for 5 minutes and serve hot with crusty bread."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "6g",
            "carbs": "20g",
            "fat": "22g"
        }
    },
    {
        "name": "Greek Gyro Wraps",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Chicken", "amount": "300g, sliced" },
            { "name": "Pita Bread", "amount": "4 pieces" },
            { "name": "Tzatziki Sauce", "amount": "1/2 cup" },
            { "name": "Tomatoes", "amount": "2, sliced" },
            { "name": "Onions", "amount": "1, sliced" },
            { "name": "Olive Oil", "amount": "1 tbsp" },
            { "name": "Greek Seasoning", "amount": "1 tsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwXPI076njvVmi3D86ZAcg5NsPvX70Nbd-Ow&s",
        "details": "Delicious Mediterranean-style wraps filled with seasoned chicken and fresh toppings.",
        "instructions": [
            "Marinate chicken with olive oil and Greek seasoning. Cook in a skillet until done.",
            "Warm pita bread and layer with cooked chicken, tomatoes, onions, and tzatziki sauce.",
            "Roll tightly into wraps and serve immediately."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "25g",
            "carbs": "30g",
            "fat": "15g"
        }
    },
    {
        "name": "Spinach Artichoke Dip",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Spinach", "amount": "1 cup, chopped" },
            { "name": "Artichoke Hearts", "amount": "1 cup, chopped" },
            { "name": "Cream Cheese", "amount": "1 cup, softened" },
            { "name": "Parmesan", "amount": "1/2 cup, grated" },
            { "name": "Garlic", "amount": "2 cloves, minced" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3SOsqEPWWjKal_V3CHlbPiF7vcr9-jETRw&s",
        "details": "A creamy and cheesy dip perfect for parties or snacks.",
        "instructions": [
            "Preheat the oven to 375°F (190°C).",
            "Mix cream cheese, Parmesan, spinach, minced garlic, and chopped artichoke hearts in a bowl.",
            "Transfer the mixture to a baking dish and bake for 15-20 minutes until bubbly.",
            "Serve hot with crackers or bread."
        ],
        "nutrition": {
            "calories": "250 kcal",
            "protein": "8g",
            "carbs": "5g",
            "fat": "20g"
        }
    },
    {
        "name": "Berry Parfait",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Greek Yogurt", "amount": "1 cup" },
            { "name": "Granola", "amount": "1/2 cup" },
            { "name": "Mixed Berries", "amount": "1 cup" },
            { "name": "Honey", "amount": "1 tbsp" },
            { "name": "Vanilla Extract", "amount": "1/4 tsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg77QNKHwYLXfkYMWfSdNcZgt6xm4WO_xK8A&s",
        "details": "A quick and healthy layered dessert with yogurt and berries.",
        "instructions": [
            "In a glass, layer Greek yogurt, granola, and mixed berries.",
            "Drizzle honey over the layers and sprinkle vanilla extract.",
            "Chill for 15 minutes before serving."
        ],
        "nutrition": {
            "calories": "200 kcal",
            "protein": "10g",
            "carbs": "30g",
            "fat": "5g"
        }
    },
    {
        "name": "Chicken Chettinad",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Chicken", "amount": "500g, cut into pieces" },
            { "name": "Onion", "amount": "2, sliced" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Coconut", "amount": "1/2 cup, grated" },
            { "name": "Curry Leaves", "amount": "6-8 leaves" },
            { "name": "Chettinad Masala", "amount": "2 tbsp" },
            { "name": "Oil", "amount": "2 tbsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" }
        ],
        "image": "https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9350.jpg",
        "details": "A spicy and flavorful South Indian chicken curry made with a blend of aromatic spices and coconut.",
        "instructions": [
            "Marinate the chicken with Chettinad masala and salt for 30 minutes.",
            "Heat oil in a pan and sauté sliced onions until golden.",
            "Add curry leaves, chopped tomatoes, and grated coconut. Cook until the mixture is well blended.",
            "Add marinated chicken and cook covered on low heat until tender.",
            "Garnish with chopped coriander leaves and serve hot with rice or paratha."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "25g",
            "carbs": "10g",
            "fat": "20g"
        }
    },
    {
        "name": "Prawn Malai Curry",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Prawns", "amount": "500g, cleaned" },
            { "name": "Coconut Milk", "amount": "1 cup" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQnTnaAGxHiQYqZswiuitbk7g_KIHOghnmw&s",
        "details": "A rich and creamy Bengali curry made with prawns and coconut milk, flavored with aromatic spices.",
        "instructions": [
            "Marinate prawns with turmeric, chili powder, and salt for 15 minutes.",
            "Heat oil in a pan and sauté onions, garlic, and ginger until golden.",
            "Add chopped tomatoes and cook until soft.",
            "Pour in coconut milk and simmer for 5 minutes.",
            "Add marinated prawns and cook for 8-10 minutes until done.",
            "Serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "30g",
            "carbs": "15g",
            "fat": "25g"
        }
    },
    {
        "name": "Kashmiri Rogan Josh",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Lamb", "amount": "500g, cut into pieces" },
            { "name": "Yogurt", "amount": "1/2 cup" },
            { "name": "Onion", "amount": "2, finely chopped" },
            { "name": "Tomato", "amount": "2, pureed" },
            { "name": "Kashmiri Chili Powder", "amount": "2 tsp" },
            { "name": "Spices (Coriander, Cumin, Garam Masala)", "amount": "1 tsp each" },
            { "name": "Oil", "amount": "2 tbsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNWllVdU5BVMauE7YIPZM5GR23UPnuDmTYA&s",
        "details": "A traditional Kashmiri lamb curry known for its rich, aromatic flavors and vibrant red color.",
        "instructions": [
            "Marinate lamb with yogurt, Kashmiri chili powder, and spices for 30 minutes.",
            "Heat oil in a pan, sauté onions until golden brown.",
            "Add tomato puree and cook until oil separates.",
            "Add marinated lamb, mix well, and cook covered on low heat until the meat is tender.",
            "Garnish with fresh coriander leaves and serve hot with naan or rice."
        ],
        "nutrition": {
            "calories": "450 kcal",
            "protein": "35g",
            "carbs": "10g",
            "fat": "30g"
        }
    },
    {
        "name": "Goan Fish Curry",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Fish", "amount": "500g, cleaned" },
            { "name": "Coconut Milk", "amount": "1 can (400ml)" },
            { "name": "Tamarind Paste", "amount": "1 tbsp" },
            { "name": "Onion", "amount": "1, sliced" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Spices (Turmeric, Red Chili Powder, Coriander Powder)", "amount": "1 tsp each" },
            { "name": "Oil", "amount": "2 tbsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_GIXMLa1gwA7MBwBVzLMm2k0dhYxkFQKUgw&s",
        "details": "A tangy and spicy fish curry from Goa, made with coconut milk and tamarind.",
        "instructions": [
            "Marinate fish with turmeric, red chili powder, and salt for 15 minutes.",
            "Heat oil in a pan, sauté onions and tomatoes until soft.",
            "Add coconut milk, tamarind paste, and coriander powder. Simmer for 5 minutes.",
            "Gently add the fish and cook until done.",
            "Serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "25g",
            "carbs": "15g",
            "fat": "20g"
        }
    },
    {
        "name": "Hyderabadi Haleem",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Lamb", "amount": "500g, boneless" },
            { "name": "Wheat", "amount": "1/2 cup, soaked" },
            { "name": "Lentils (Masoor, Moong, Toor)", "amount": "1/2 cup, mixed" },
            { "name": "Onion", "amount": "2, sliced" },
            { "name": "Ginger", "amount": "1 tbsp, minced" },
            { "name": "Garlic", "amount": "1 tbsp, minced" },
            { "name": "Spices (Cinnamon, Cloves, Cardamom)", "amount": "1 tsp each" },
            { "name": "Oil", "amount": "3 tbsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBlcnO70eqCdIbP8TPFhko_67GKc5qY2Rgg&s",
        "details": "A rich and hearty stew made with lamb, wheat, and lentils, slow-cooked with spices.",
        "instructions": [
            "Cook lamb with ginger, garlic, spices, and water until tender.",
            "Add soaked wheat and lentils, cook until soft and mushy.",
            "Blend the mixture lightly to achieve a smooth consistency.",
            "Garnish with fried onions and serve hot with lemon wedges."
        ],
        "nutrition": {
            "calories": "500 kcal",
            "protein": "30g",
            "carbs": "50g",
            "fat": "20g"
        }
    },
    {
        "name": "Kerala Parotta",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Flour", "amount": "2 cups" },
            { "name": "Water", "amount": "3/4 cup" },
            { "name": "Oil", "amount": "3 tbsp" },
            { "name": "Salt", "amount": "1 tsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHNrCFhR1aOPckeyGj1_sNpe3whdwLHEq6Mw&s",
        "details": "A flaky and layered flatbread from Kerala, made with flour and oil.",
        "instructions": [
            "Knead flour, water, salt, and 1 tbsp oil into a smooth dough. Rest for 30 minutes.",
            "Divide dough into small balls, roll each into thin sheets, and fold to create layers.",
            "Roll the layered dough into a circle and cook on a hot griddle with oil until golden brown on both sides.",
            "Serve hot with curry or chutney."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "5g",
            "carbs": "50g",
            "fat": "10g"
        }
    },{
        "name": "Mysore Masala Dosa",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Rice", "amount": "1 cup" },
            { "name": "Urad Dal", "amount": "1/2 cup" },
            { "name": "Potato", "amount": "2, boiled and mashed" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Spices (Turmeric, Chili Powder)", "amount": "1 tsp each" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "for cooking" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tXNH_xCEYOU9wjkNFLKfCHUf1mvc8QmR4g&s",
        "details": "A crispy dosa filled with a spicy potato filling, served with chutney and sambar.",
        "instructions": [
            "Soak rice and urad dal for 6-8 hours, then grind to a smooth batter.",
            "Ferment the batter overnight in a warm place.",
            "Prepare the potato filling by sautéing onions and tomatoes with spices. Add mashed potatoes and mix well.",
            "Heat a griddle, spread a ladle of batter thinly, and cook until crispy. Add the potato filling and fold.",
            "Serve hot with coconut chutney and sambar."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "10g",
            "carbs": "60g",
            "fat": "10g"
        }
    },
    {
        "name": "Rajasthani Laal Maas",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Lamb", "amount": "500g" },
            { "name": "Yogurt", "amount": "1/2 cup" },
            { "name": "Onion", "amount": "2, sliced" },
            { "name": "Garlic", "amount": "5 cloves, minced" },
            { "name": "Red Chilies", "amount": "10, soaked and ground" },
            { "name": "Garam Masala", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfaEZyY6qVfmqS2lGG-pzjJnK9yooEfTE_g&s",
        "details": "A fiery Rajasthani lamb curry made with red chilies and yogurt.",
        "instructions": [
            "Marinate lamb with yogurt, red chili paste, garam masala, and salt for 1 hour.",
            "Heat oil in a pan, sauté onions and garlic until golden.",
            "Add marinated lamb and cook covered on low heat until tender, stirring occasionally.",
            "Garnish with coriander leaves and serve hot with rice or roti."
        ],
        "nutrition": {
            "calories": "450 kcal",
            "protein": "35g",
            "carbs": "10g",
            "fat": "30g"
        }
    },
    {
        "name": "Punjabi Chole Bhature",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Chickpeas", "amount": "1 cup, soaked overnight" },
            { "name": "Onion", "amount": "2, chopped" },
            { "name": "Tomato", "amount": "2, pureed" },
            { "name": "Garam Masala", "amount": "1 tsp" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Flour", "amount": "2 cups (for bhature dough)" },
            { "name": "Oil", "amount": "for frying" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfg2Pqaj4jxVWOj1IUPlfMjspp-QY5yzlNg&s",
        "details": "A delicious North Indian dish consisting of spicy chickpeas and fried bread (bhature).",
        "instructions": [
            "Boil soaked chickpeas with salt until soft.",
            "Heat oil, sauté cumin seeds, onions, and tomato puree. Add spices and cooked chickpeas, simmer for 10 minutes.",
            "Prepare dough with flour, water, and salt. Roll into discs and deep fry in hot oil to make bhature.",
            "Serve hot with chole and garnished onions."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "15g",
            "carbs": "45g",
            "fat": "10g"
        }
    },
    {
        "name": "Bengali Shorshe Ilish",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Hilsa Fish", "amount": "4 pieces" },
            { "name": "Mustard Seeds", "amount": "2 tbsp, ground" },
            { "name": "Green Chilies", "amount": "4, slit" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Mustard Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpIbRm7hBDQv_lJCr3BWuFgEcxGzVIeUW4g&s",
        "details": "A traditional Bengali fish curry made with hilsa fish and mustard paste.",
        "instructions": [
            "Marinate hilsa fish with turmeric and salt for 15 minutes.",
            "Grind mustard seeds with green chilies to make a paste.",
            "Heat mustard oil in a pan, add mustard paste and water. Bring to a boil.",
            "Add marinated fish pieces and cook on low heat until done.",
            "Serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "25g",
            "carbs": "5g",
            "fat": "20g"
        }
    },
    {
        "name": "Andhra Chicken Fry",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Chicken", "amount": "500g, cut into pieces" },
            { "name": "Onion", "amount": "2, finely sliced" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Curry Leaves", "amount": "10-12 leaves" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "3 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS2XoMBlXvBhwClsEd3RHHoV6MyYTndeRc0A&s",
        "details": "A spicy and crispy chicken fry from Andhra Pradesh, flavored with aromatic spices.",
        "instructions": [
            "Marinate chicken with turmeric, red chili powder, coriander powder, and salt. Set aside for 30 minutes.",
            "Heat oil in a pan, sauté onions, garlic, and ginger until golden brown.",
            "Add marinated chicken and cook on medium heat until the chicken is crispy and fully cooked.",
            "Garnish with curry leaves and serve hot with rice or roti."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "30g",
            "carbs": "10g",
            "fat": "25g"
        }
    },
    {
        "name": "Gujarati Undhiyu",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Mixed Vegetables", "amount": "3 cups (potatoes, yam, eggplant, green beans)" },
            { "name": "Fenugreek Leaves", "amount": "1/2 cup, chopped" },
            { "name": "Gram Flour (Besan)", "amount": "1/2 cup" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Oil", "amount": "3 tbsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYAhs1YXEBmOTryV5vHgo3fg-3xiOkefd3A&s",
        "details": "A traditional Gujarati mixed vegetable dish cooked with spices and fenugreek dumplings.",
        "instructions": [
            "Mix fenugreek leaves, gram flour, salt, turmeric, and water to make a dough. Shape into small dumplings and steam.",
            "Heat oil in a pan, add mixed vegetables and spices. Cook until the vegetables are tender.",
            "Add the steamed dumplings and simmer for 5 minutes.",
            "Serve hot with puri or roti."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "10g",
            "carbs": "50g",
            "fat": "15g"
        }
    },
    {
        "name": "Lucknowi Biryani",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Basmati Rice", "amount": "2 cups" },
            { "name": "Chicken", "amount": "500g, marinated" },
            { "name": "Yogurt", "amount": "1/2 cup" },
            { "name": "Onion", "amount": "2, sliced and fried" },
            { "name": "Saffron", "amount": "1 pinch, soaked in 2 tbsp milk" },
            { "name": "Spices (Cinnamon, Cloves, Cardamom)", "amount": "1 tsp each" },
            { "name": "Oil", "amount": "2 tbsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRYImYhcu4AQW8UI2PlbAfMkiMDBp-Liq0GA&s",
        "details": "A fragrant and flavorful biryani from Lucknow, made with basmati rice, chicken, and aromatic spices.",
        "instructions": [
            "Marinate chicken with yogurt, spices, and salt. Set aside for 1 hour.",
            "Cook rice with whole spices and saffron until 90% done.",
            "In a large pot, layer chicken, fried onions, and rice. Repeat layers.",
            "Cover tightly and cook on low heat (dum) for 30 minutes.",
            "Serve hot with raita."
        ],
        "nutrition": {
            "calories": "500 kcal",
            "protein": "25g",
            "carbs": "70g",
            "fat": "15g"
        }
    },
    {
        "name": "Sindhi Kadhi",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Gram Flour (Besan)", "amount": "1/2 cup" },
            { "name": "Mixed Vegetables", "amount": "2 cups (okra, potatoes, carrots)" },
            { "name": "Tamarind Paste", "amount": "1 tbsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Cumin Seeds", "amount": "1 tsp" },
            { "name": "Oil", "amount": "2 tbsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiL1yhe3OnokGzAV4t8m7OfG4JHbZkoNWV_Q&s",
        "details": "A tangy and spicy Sindhi curry made with gram flour and mixed vegetables.",
        "instructions": [
            "Heat oil in a pan, roast gram flour until aromatic.",
            "Add turmeric, chili powder, and water to make a curry base. Simmer for 10 minutes.",
            "Add tamarind paste and mixed vegetables, cook until tender.",
            "Serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "10g",
            "carbs": "50g",
            "fat": "10g"
        }
    },
    {
        "name": "Mangalorean Fish Curry",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Fish", "amount": "500g, cleaned" },
            { "name": "Coconut Milk", "amount": "1 cup" },
            { "name": "Tamarind", "amount": "2 tbsp, paste" },
            { "name": "Onion", "amount": "1, sliced" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMNVvQZwFKLQRrgfXMvzgXJVTzKrYOENM9Q&s",
        "details": "A tangy and spicy fish curry from Mangalore, made with coconut milk and tamarind.",
        "instructions": [
            "Marinate fish with turmeric, chili powder, and salt for 15 minutes.",
            "Heat oil in a pan, sauté onions until golden, then add tomatoes and cook until soft.",
            "Add coconut milk and tamarind paste, mix well, and bring to a simmer.",
            "Gently add the fish pieces and cook on low heat until the fish is tender.",
            "Serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "25g",
            "carbs": "15g",
            "fat": "20g"
        }
    },
    {
        "name": "Bhutte Ka Kees",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Corn", "amount": "2 cups, grated" },
            { "name": "Milk", "amount": "1/2 cup" },
            { "name": "Ginger", "amount": "1/2 inch, minced" },
            { "name": "Green Chili", "amount": "1, finely chopped" },
            { "name": "Cumin Seeds", "amount": "1/2 tsp" },
            { "name": "Turmeric", "amount": "1/4 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "1 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-svMLmrIioLYWgY98rISB09ji7wwMrwFjQQ&s",
        "details": "A popular street food from Madhya Pradesh made with grated corn cooked with milk and spices.",
        "instructions": [
            "Heat oil in a pan, add cumin seeds, minced ginger, and green chili. Sauté briefly.",
            "Add grated corn, turmeric, and salt. Mix well and cook for 2-3 minutes.",
            "Pour in milk and cook until the mixture thickens.",
            "Garnish with coriander leaves and serve hot."
        ],
        "nutrition": {
            "calories": "250 kcal",
            "protein": "8g",
            "carbs": "40g",
            "fat": "8g"
        }
    },
    {
        "name": "Kolhapuri Chicken",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Chicken", "amount": "500g, cut into pieces" },
            { "name": "Onion", "amount": "2, sliced" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Kolhapuri Masala", "amount": "2 tbsp" },
            { "name": "Coconut", "amount": "1/4 cup, grated" },
            { "name": "Coriander Leaves", "amount": "2 tbsp, chopped" },
            { "name": "Oil", "amount": "2 tbsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnKQby678otWWkvmdzcdcSC1LAyozoxZjtQ&s",
        "details": "A spicy and flavorful chicken curry from Kolhapur, made with a special Kolhapuri masala.",
        "instructions": [
            "Marinate chicken with Kolhapuri masala and salt for 30 minutes.",
            "Heat oil in a pan, sauté onions until golden, then add tomatoes and grated coconut. Cook until well combined.",
            "Add marinated chicken and cook covered until tender.",
            "Garnish with coriander leaves and serve hot with rice or chapati."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "30g",
            "carbs": "10g",
            "fat": "25g"
        }
    },
    {
        "name": "Patra",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Colocasia Leaves", "amount": "6 large leaves" },
            { "name": "Gram Flour (Besan)", "amount": "1 cup" },
            { "name": "Tamarind", "amount": "2 tbsp, paste" },
            { "name": "Jaggery", "amount": "1 tbsp, grated" },
            { "name": "Turmeric", "amount": "1/4 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "for frying" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLGFKlWKo3hK7AYXr1urJqk3dFkfouJplvg&s",
        "details": "A Gujarati snack made with colocasia leaves coated with a spiced gram flour paste, steamed and fried.",
        "instructions": [
            "Prepare a paste with gram flour, tamarind, jaggery, turmeric, chili powder, and salt.",
            "Spread the paste evenly on each colocasia leaf, layer, and roll tightly.",
            "Steam the rolls for 15-20 minutes. Let them cool, then slice into pieces.",
            "Fry the slices in hot oil until crispy and serve with chutney."
        ],
        "nutrition": {
            "calories": "200 kcal",
            "protein": "5g",
            "carbs": "30g",
            "fat": "8g"
        }
    },
    {
        "name": "Kosha Mangsho",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Mutton", "amount": "500g, cut into pieces" },
            { "name": "Onion", "amount": "3, finely sliced" },
            { "name": "Tomato", "amount": "2, pureed" },
            { "name": "Yogurt", "amount": "1/2 cup" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Garam Masala", "amount": "1/2 tsp" },
            { "name": "Oil", "amount": "3 tbsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3O2kwCFyekKJ1nlFT020aNBZLCaoj3r9yqw&s",
        "details": "A rich and spicy Bengali mutton curry, slow-cooked with onions, tomatoes, and yogurt.",
        "instructions": [
            "Marinate mutton with yogurt, turmeric, red chili powder, and salt. Set aside for 30 minutes.",
            "Heat oil in a pan, sauté onions until golden brown.",
            "Add tomato puree and cook until the oil separates.",
            "Add marinated mutton and cook covered on low heat until tender.",
            "Serve hot with rice or roti."
        ],
        "nutrition": {
            "calories": "500 kcal",
            "protein": "30g",
            "carbs": "10g",
            "fat": "35g"
        }
    },
    {
        "name": "Sarson Ka Saag",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Mustard Greens", "amount": "2 cups, chopped" },
            { "name": "Spinach", "amount": "1 cup, chopped" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Green Chilies", "amount": "2, finely chopped" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Butter", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUHFFTucw5hjz0wbs_gPQpgchhemVKidExw&s",
        "details": "A traditional Punjabi dish made with mustard greens and spinach, cooked with spices.",
        "instructions": [
            "Cook mustard greens, spinach, green chilies, turmeric, and salt in water until tender.",
            "Blend the cooked greens into a coarse paste.",
            "Heat butter in a pan, sauté onions, garlic, and ginger until golden.",
            "Add the blended greens and cook for 10 minutes.",
            "Serve hot with makki di roti."
        ],
        "nutrition": {
            "calories": "200 kcal",
            "protein": "8g",
            "carbs": "20g",
            "fat": "10g"
        }
    },
    {
        "name": "Nihari",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Beef", "amount": "500g, bone-in" },
            { "name": "Onion", "amount": "2, finely sliced" },
            { "name": "Ginger", "amount": "1 tbsp, minced" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Nihari Masala", "amount": "2 tbsp" },
            { "name": "Wheat Flour", "amount": "2 tbsp, mixed with water" },
            { "name": "Oil", "amount": "3 tbsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgd1EZWvu7an41mJI5JpEbqtifaQWuO_5-Q&s",
        "details": "A slow-cooked beef stew from North India, flavored with aromatic spices.",
        "instructions": [
            "Heat oil in a pot, sauté onions, ginger, and garlic until golden.",
            "Add beef, nihari masala, and salt. Cook for 10 minutes.",
            "Add water and simmer on low heat until the beef is tender.",
            "Mix wheat flour with water, add to the stew, and cook until thickened.",
            "Serve hot with naan or rice."
        ],
        "nutrition": {
            "calories": "600 kcal",
            "protein": "40g",
            "carbs": "15g",
            "fat": "40g"
        }
    },
    {
        "name": "Methi Malai Paneer",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Paneer", "amount": "200g, cubed" },
            { "name": "Fenugreek Leaves (Methi)", "amount": "1 cup, fresh or dried" },
            { "name": "Cream", "amount": "1/2 cup" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Tomato", "amount": "2, pureed" },
            { "name": "Garlic", "amount": "2 cloves, minced" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrrVgOIcz2xoX4xICcrapSOCPrzoOEoPopA&s",
        "details": "A creamy and flavorful North Indian dish made with paneer and fenugreek leaves.",
        "instructions": [
            "Heat oil in a pan, sauté onions and garlic until golden.",
            "Add tomato puree, turmeric, coriander powder, and cook until the oil separates.",
            "Add fenugreek leaves and cook for 2 minutes.",
            "Add paneer and cream, mix well, and simmer for 5 minutes.",
            "Serve hot with naan or roti."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "15g",
            "carbs": "20g",
            "fat": "25g"
        }
    },
    {
        "name": "Rogan Josh",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Lamb", "amount": "500g" },
            { "name": "Yogurt", "amount": "1/2 cup" },
            { "name": "Onion", "amount": "2, sliced" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Kashmiri Chili Powder", "amount": "1 tsp" },
            { "name": "Garam Masala", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9XaN7wA5Z-fJMa3uk4pjcW-y4lc9kf5Nz1A&s",
        "details": "A traditional Kashmiri lamb curry known for its rich, aromatic flavors and vibrant red color.",
        "instructions": [
            "Marinate lamb with yogurt, Kashmiri chili powder, garam masala, and salt for 30 minutes.",
            "Heat oil in a pan, sauté onions until golden, then add chopped tomatoes and cook until soft.",
            "Add the marinated lamb and cook covered on low heat until tender.",
            "Garnish with fresh coriander leaves and serve hot with rice or naan."
        ],
        "nutrition": {
            "calories": "450 kcal",
            "protein": "35g",
            "carbs": "10g",
            "fat": "30g"
        }
    },
    {
        "name": "Khar",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Fish", "amount": "500g" },
            { "name": "Raw Papaya", "amount": "1 cup, chopped" },
            { "name": "Bamboo Shoot", "amount": "1/2 cup, chopped" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrf8Jijxk-dZEGMcWdlQjiussANtymsg_-w&s",
        "details": "A traditional Assamese dish made with fish, raw papaya, and bamboo shoot.",
        "instructions": [
            "Marinate fish with turmeric and salt for 15 minutes.",
            "Heat oil in a pan, cook fish lightly, and set aside.",
            "In the same pan, add raw papaya, bamboo shoot, and water. Cook until tender.",
            "Add the fish back to the pan and simmer for a few minutes.",
            "Serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "25g",
            "carbs": "10g",
            "fat": "15g"
        }
    },
    {
        "name": "Bisi Bele Bath",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Rice", "amount": "1 cup" },
            { "name": "Lentils (Toor Dal)", "amount": "1/2 cup" },
            { "name": "Mixed Vegetables", "amount": "2 cups (carrots, beans, peas)" },
            { "name": "Tamarind", "amount": "2 tbsp, paste" },
            { "name": "Bisi Bele Bath Powder", "amount": "2 tbsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Ghee", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75pZrG9m18BxugqbaIYwg_S_uNAG-ExLG-g&s",
        "details": "A traditional Karnataka dish made with rice, lentils, vegetables, and tamarind.",
        "instructions": [
            "Cook rice and lentils separately and set aside.",
            "In a pan, cook vegetables with water, tamarind paste, and Bisi Bele Bath powder until tender.",
            "Mix the cooked rice, lentils, and vegetable mixture. Simmer for a few minutes.",
            "Serve hot with a dollop of ghee."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "10g",
            "carbs": "70g",
            "fat": "10g"
        }
    },
    {
        "name": "Prawn Balchao",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Prawns", "amount": "500g, cleaned" },
            { "name": "Vinegar", "amount": "3 tbsp" },
            { "name": "Onion", "amount": "1, sliced" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53HPg1SVoMdtT6RJ1UGbm5LqdT9x3750HBQ&s",
        "details": "A spicy Goan prawn pickle made with vinegar and spices.",
        "instructions": [
            "Marinate prawns with red chili powder, vinegar, and salt for 15 minutes.",
            "Heat oil in a pan, sauté onions until golden, then add tomatoes and cook until soft.",
            "Add marinated prawns and cook on low heat until done.",
            "Serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "25g",
            "carbs": "10g",
            "fat": "15g"
        }
    },
    {
        "name": "Mutton Korma",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Mutton", "amount": "500g, cut into pieces" },
            { "name": "Yogurt", "amount": "1/2 cup" },
            { "name": "Onion", "amount": "2, finely sliced" },
            { "name": "Tomato", "amount": "2, pureed" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Garam Masala", "amount": "1 tsp" },
            { "name": "Oil", "amount": "3 tbsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bevVXtH1AE-Q0_oXGzodVVurMUqVO97jbg&s",
        "details": "A rich and creamy mutton curry made with yogurt and aromatic spices.",
        "instructions": [
            "Marinate mutton with yogurt, turmeric, red chili powder, garam masala, and salt. Set aside for 30 minutes.",
            "Heat oil in a pan, sauté onions until golden.",
            "Add tomato puree and cook until oil separates.",
            "Add marinated mutton and cook covered on low heat until tender.",
            "Serve hot with naan or rice."
        ],
        "nutrition": {
            "calories": "500 kcal",
            "protein": "30g",
            "carbs": "10g",
            "fat": "35g"
        }
    },
    {
        "name": "Chingri Malai Curry",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Prawns", "amount": "500g, cleaned" },
            { "name": "Coconut Milk", "amount": "1 cup" },
            { "name": "Onion", "amount": "1, finely sliced" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Oil", "amount": "2 tbsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVi5XR5PvGxtBbsBIn17ujTAqiPs5gpz5yQ&s",
        "details": "A rich and creamy Bengali prawn curry made with coconut milk and aromatic spices.",
        "instructions": [
            "Marinate prawns with turmeric, red chili powder, and salt for 15 minutes.",
            "Heat oil in a pan, sauté onions and tomatoes until soft.",
            "Add coconut milk and coriander powder. Simmer for 5 minutes.",
            "Add prawns and cook until done.",
            "Serve hot with rice."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "30g",
            "carbs": "15g",
            "fat": "25g"
        }
    },
    {
        "name": "Kharzi",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Chicken", "amount": "500g, cut into pieces" },
            { "name": "Basmati Rice", "amount": "2 cups" },
            { "name": "Onion", "amount": "2, finely sliced" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Spices (Cinnamon, Cardamom, Cloves)", "amount": "1 tsp each" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "3 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjIZdqQImK0esuGnXhA7fx3EeD1lbk7OO4Q&s",
        "details": "A traditional dish made with chicken and rice, cooked with aromatic spices.",
        "instructions": [
            "Marinate chicken with turmeric, salt, and spices. Set aside.",
            "Heat oil in a pan, sauté onions until golden. Add tomatoes and cook until soft.",
            "Add marinated chicken and cook until half done.",
            "Add rice and water. Cover and cook until rice and chicken are fully cooked.",
            "Serve hot with raita."
        ],
        "nutrition": {
            "calories": "450 kcal",
            "protein": "25g",
            "carbs": "60g",
            "fat": "15g"
        }
    },
    {
        "name": "Mysore Pak",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Gram Flour (Besan)", "amount": "1 cup" },
            { "name": "Sugar", "amount": "1 cup" },
            { "name": "Ghee", "amount": "1 cup" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLC15QbyK_Z148CzrCY9L2vZCnIxnwcWfZw&s",
        "details": "A rich and sweet South Indian dessert made with gram flour, sugar, and ghee.",
        "instructions": [
            "Heat ghee in a pan, roast gram flour until aromatic.",
            "Prepare sugar syrup by dissolving sugar in water and heating until one-string consistency.",
            "Slowly add sugar syrup to the roasted gram flour, stirring continuously.",
            "Cook until the mixture thickens and leaves the sides of the pan.",
            "Pour into a greased tray, let it set, and cut into pieces. Serve."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "5g",
            "carbs": "50g",
            "fat": "10g"
        }
    },
    {
        "name": "Chicken Xacuti",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Chicken", "amount": "500g, cut into pieces" },
            { "name": "Coconut", "amount": "1/2 cup, grated" },
            { "name": "Onion", "amount": "2, sliced" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Xacuti Masala Powder", "amount": "2 tbsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7Uib-GOUFhVNSH8xLXmSDH4jD3IiUUrtbA&s",
        "details": "A spicy Goan chicken curry made with coconut and aromatic spices.",
        "instructions": [
            "Marinate chicken with turmeric, Xacuti masala powder, and salt for 30 minutes.",
            "Heat oil in a pan, sauté onions until golden, then add tomatoes and cook until soft.",
            "Add grated coconut and stir for 2-3 minutes.",
            "Add marinated chicken and cook covered on low heat until the chicken is fully cooked.",
            "Serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "25g",
            "carbs": "15g",
            "fat": "25g"
        }
    },
    {
        "name": "Bhindi Do Pyaza",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Okra", "amount": "300g, chopped" },
            { "name": "Onion", "amount": "2, sliced" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/4 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzxNX-LWbaKEdOXutKow3LKyda_dkADSBKw&s",
        "details": "A North Indian dish made with okra and onions, cooked with aromatic spices.",
        "instructions": [
            "Heat oil in a pan and sauté onions until golden.",
            "Add chopped tomatoes, coriander powder, turmeric, chili powder, and salt. Cook until the tomatoes are soft.",
            "Add chopped okra and cook covered on low heat until tender, stirring occasionally.",
            "Serve hot with rice or roti."
        ],
        "nutrition": {
            "calories": "200 kcal",
            "protein": "5g",
            "carbs": "30g",
            "fat": "8g"
        }
    },
    {
        "name": "Kerala Beef Fry",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Beef", "amount": "500g, cut into small pieces" },
            { "name": "Onion", "amount": "2, sliced" },
            { "name": "Coconut", "amount": "1/2 cup, shredded" },
            { "name": "Garlic", "amount": "4 cloves, minced" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Black Pepper", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/4 tsp" },
            { "name": "Curry Leaves", "amount": "10 leaves" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZkjIS8njAWMl2yVzhK_OBvmBMCXmZy8ICw&s",
        "details": "A spicy and flavorful beef fry from Kerala, cooked with coconut and aromatic spices.",
        "instructions": [
            "Marinate beef with turmeric, black pepper, and salt for 30 minutes.",
            "Pressure cook the beef with a little water until tender.",
            "Heat oil in a pan, sauté onions, garlic, ginger, and curry leaves until golden.",
            "Add shredded coconut and stir until browned.",
            "Add the cooked beef and stir fry until well coated with the masala.",
            "Serve hot with rice or roti."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "30g",
            "carbs": "10g",
            "fat": "25g"
        }
    },
    {
        "name": "Paneer Bhurji",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Paneer", "amount": "200g, crumbled" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Green Chilies", "amount": "2, chopped" },
            { "name": "Turmeric", "amount": "1/4 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "1 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEpY9f6AQ8sNMt6Ki_kj1RcDALFL9CrexFg&s",
        "details": "A North Indian dish made with crumbled paneer, onions, and tomatoes, cooked with spices.",
        "instructions": [
            "Heat oil in a pan, sauté onions and green chilies until softened.",
            "Add chopped tomatoes, turmeric, chili powder, coriander powder, and salt. Cook until the tomatoes are soft.",
            "Add crumbled paneer and mix well. Cook for 2-3 minutes.",
            "Serve hot with roti or paratha."
        ],
        "nutrition": {
            "calories": "250 kcal",
            "protein": "15g",
            "carbs": "10g",
            "fat": "15g"
        }
    },
    {
        "name": "Konkani Fish Curry",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Fish", "amount": "500g, cleaned" },
            { "name": "Coconut", "amount": "1/2 cup, grated" },
            { "name": "Tamarind", "amount": "2 tbsp, paste" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDduE-R-UjBkEtkayVKef6GPBOmxsxlh1WuA&s",
        "details": "A tangy and spicy fish curry from the Konkan region, made with coconut and tamarind.",
        "instructions": [
            "Marinate fish with turmeric, chili powder, and salt for 15 minutes.",
            "Heat oil in a pan, sauté onions until golden, then add tomatoes and cook until soft.",
            "Add grated coconut and tamarind paste, mix well, and simmer for 5 minutes.",
            "Add marinated fish and cook on low heat until the fish is done.",
            "Serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "25g",
            "carbs": "15g",
            "fat": "20g"
        }
    },
    {
        "name": "Rajasthani Ker Sangri",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Ker Berries", "amount": "1/2 cup, soaked overnight" },
            { "name": "Sangri Beans", "amount": "1/2 cup, soaked overnight" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/4 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiAhOA_Pyueo9M5RaRLtg9T9MRVG2pz3ixw&s",
        "details": "A traditional Rajasthani dish made with dried ker berries and sangri beans, cooked with spices.",
        "instructions": [
            "Drain the soaked ker berries and sangri beans.",
            "Heat oil in a pan, add turmeric, red chili powder, and coriander powder. Sauté briefly.",
            "Add the soaked ker berries and sangri beans. Mix well and cook covered until tender.",
            "Serve hot with roti or rice."
        ],
        "nutrition": {
            "calories": "200 kcal",
            "protein": "5g",
            "carbs": "30g",
            "fat": "5g"
        }
    },
    {
        "name": "Mutton Keema",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Mutton Mince", "amount": "500g" },
            { "name": "Onion", "amount": "2, chopped" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Peas", "amount": "1 cup" },
            { "name": "Ginger-Garlic Paste", "amount": "1 tbsp" },
            { "name": "Turmeric", "amount": "1/4 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Garam Masala", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8bSSJZzeW-wrZFxHPGZwrzOaTBLmbdOqyQ&s",
        "details": "A spicy and flavorful minced mutton dish, cooked with peas and aromatic spices.",
        "instructions": [
            "Heat oil in a pan, sauté onions until golden, then add ginger-garlic paste and cook until aromatic.",
            "Add tomatoes, turmeric, chili powder, garam masala, and salt. Cook until the tomatoes soften.",
            "Add mutton mince and cook on medium heat until browned.",
            "Add peas and simmer for 10 minutes until everything is cooked through.",
            "Serve hot with roti or rice."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "25g",
            "carbs": "10g",
            "fat": "30g"
        }
    },
    {
        "name": "Chana Madra",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Chickpeas", "amount": "1 cup, soaked overnight" },
            { "name": "Yogurt", "amount": "1 cup" },
            { "name": "Turmeric", "amount": "1/4 tsp" },
            { "name": "Cumin Seeds", "amount": "1/2 tsp" },
            { "name": "Garam Masala", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "1 tbsp" }
        ],
        "image": "https://img-global.cpcdn.com/recipes/fece38ac2a8b1490/680x482cq70/chana-madra-recipe-main-photo.jpg",
        "details": "A traditional Himachali dish made with chickpeas and yogurt, cooked with aromatic spices.",
        "instructions": [
            "Boil soaked chickpeas until soft and set aside.",
            "Heat oil in a pan, add cumin seeds, and sauté briefly.",
            "Add yogurt, turmeric, and garam masala. Stir continuously to prevent curdling.",
            "Add boiled chickpeas, mix well, and simmer for 10 minutes.",
            "Serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "15g",
            "carbs": "45g",
            "fat": "10g"
        }
    },
    {
        "name": "Pesarattu Upma",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Green Gram (Moong Dal)", "amount": "1 cup, soaked" },
            { "name": "Rice", "amount": "1/4 cup, soaked" },
            { "name": "Semolina (Rava)", "amount": "1 cup" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Green Chilies", "amount": "2, finely chopped" },
            { "name": "Curry Leaves", "amount": "10-12 leaves" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://i.ytimg.com/vi/aXAxzNK1FK0/maxresdefault.jpg",
        "details": "A combination of Pesarattu (green gram dosa) and Upma (semolina porridge), served together.",
        "instructions": [
            "Grind soaked green gram and rice into a smooth batter with salt.",
            "In a pan, heat oil, sauté ginger, green chilies, curry leaves, and semolina until aromatic.",
            "Add water and salt, cook until semolina thickens into Upma.",
            "Prepare Pesarattu by pouring batter onto a hot tawa, spread into a thin dosa, and cook until golden.",
            "Serve Pesarattu with a side of Upma."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "10g",
            "carbs": "60g",
            "fat": "10g"
        }
    },
    {
        "name": "Bharwa Baingan",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Eggplant", "amount": "6 small, slit" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "3 tbsp" }
        ],
        "image": "https://swatisani.net/kitchen/wp-content/uploads/2015/05/IMG_8798.jpg",
        "details": "A North Indian dish made with stuffed eggplants, cooked with onions and tomatoes.",
        "instructions": [
            "Mix coriander powder, turmeric, red chili powder, and salt. Stuff this mixture into the slit eggplants.",
            "Heat oil in a pan, sauté onions until golden.",
            "Add tomatoes and cook until soft.",
            "Add stuffed eggplants and cook covered on low heat until tender.",
            "Serve hot with roti or rice."
        ],
        "nutrition": {
            "calories": "250 kcal",
            "protein": "5g",
            "carbs": "30g",
            "fat": "10g"
        }
    },
    {
        "name": "Chicken 65",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Chicken", "amount": "500g, boneless, cubed" },
            { "name": "Yogurt", "amount": "1/4 cup" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Curry Leaves", "amount": "10-12 leaves" },
            { "name": "Cornflour", "amount": "2 tbsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "for frying" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNzFOt6kPDpuEx5fBQ-cFSfrOrSlytz9HFA&s",
        "details": "A spicy and crispy South Indian chicken dish, flavored with yogurt and aromatic spices.",
        "instructions": [
            "Marinate chicken with yogurt, red chili powder, turmeric, cornflour, and salt for 30 minutes.",
            "Heat oil in a pan, fry chicken pieces until golden and crispy.",
            "Add curry leaves to the oil and fry briefly for garnish.",
            "Serve hot, garnished with fried curry leaves."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "25g",
            "carbs": "10g",
            "fat": "30g"
        }
    },
    {
        "name": "Kashmiri Yakhni",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Lamb", "amount": "500g, bone-in" },
            { "name": "Yogurt", "amount": "1 cup" },
            { "name": "Cinnamon", "amount": "1 stick" },
            { "name": "Cardamom", "amount": "4 pods" },
            { "name": "Cloves", "amount": "4" },
            { "name": "Fennel Powder", "amount": "1 tsp" },
            { "name": "Ginger Powder", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxioDeIA48iDv1MPzKt_fjKb9k-e3guLoaA&s",
        "details": "A traditional Kashmiri lamb curry made with yogurt and aromatic spices.",
        "instructions": [
            "Marinate lamb with yogurt, ginger powder, fennel powder, and salt for 30 minutes.",
            "Heat oil in a pot, add cinnamon, cardamom, and cloves. Sauté briefly.",
            "Add marinated lamb and cook until tender, adding water as needed to make a light gravy.",
            "Serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "30g",
            "carbs": "10g",
            "fat": "25g"
        }
    },
    {
        "name": "Gujarati Handvo",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Rice", "amount": "1 cup" },
            { "name": "Lentils (Toor Dal, Chana Dal)", "amount": "1/2 cup each" },
            { "name": "Mixed Vegetables", "amount": "1 cup, grated (carrot, bottle gourd, etc.)" },
            { "name": "Yogurt", "amount": "1/2 cup" },
            { "name": "Turmeric", "amount": "1/4 tsp" },
            { "name": "Baking Soda", "amount": "1/4 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlSnA8xxizUdewqTX9JsPOZqcJxA60PPIsA&s",
        "details": "A savory Gujarati cake made with rice, lentils, and vegetables, flavored with spices.",
        "instructions": [
            "Soak rice and lentils for 6-8 hours, then grind into a coarse batter.",
            "Ferment the batter overnight in a warm place.",
            "Mix grated vegetables, yogurt, turmeric, baking soda, and salt into the batter.",
            "Pour batter into a greased baking dish and drizzle with oil.",
            "Bake at 180°C (350°F) for 30-40 minutes or until golden brown.",
            "Serve hot with chutney."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "10g",
            "carbs": "50g",
            "fat": "8g"
        }
    },
    {
        "name": "Mangalorean Chicken Sukka",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Chicken", "amount": "500g, cut into pieces" },
            { "name": "Coconut", "amount": "1/2 cup, grated" },
            { "name": "Onion", "amount": "2, sliced" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Garam Masala", "amount": "1 tsp" },
            { "name": "Curry Leaves", "amount": "10 leaves" },
            { "name": "Turmeric", "amount": "1/4 tsp" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5vHC43CvNALy-qXVkHpSpzwp0gEwljb_uw&s",
        "details": "A dry and spicy chicken dish from Mangalore, made with coconut and aromatic spices.",
        "instructions": [
            "Marinate chicken with turmeric, chili powder, and salt for 30 minutes.",
            "Heat oil in a pan, sauté onions until golden, then add tomatoes and cook until soft.",
            "Add grated coconut, curry leaves, and garam masala. Stir for 2-3 minutes.",
            "Add marinated chicken and cook on medium heat until the chicken is done and the mixture is dry.",
            "Serve hot with rice or roti."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "25g",
            "carbs": "15g",
            "fat": "25g"
        }
    },
    {
        "name": "Punjabi Kadhi",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Yogurt", "amount": "1 cup" },
            { "name": "Gram Flour (Besan)", "amount": "1/2 cup" },
            { "name": "Onion", "amount": "1, sliced (for pakoras)" },
            { "name": "Turmeric", "amount": "1/4 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Cumin Seeds", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "for frying" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7J2jVmIYNKE51MiqJZR9btFrBZ_uvK2vGw&s",
        "details": "A tangy and spicy Punjabi curry made with yogurt and gram flour, served with pakoras.",
        "instructions": [
            "Prepare a batter with gram flour, water, sliced onions, and salt.",
            "Fry small portions of the batter to make pakoras and set aside.",
            "In a pot, whisk yogurt with gram flour, turmeric, chili powder, and water to make a smooth mixture.",
            "Heat oil, add cumin seeds, and pour in the yogurt mixture. Simmer until thickened.",
            "Add the pakoras to the kadhi and cook for 5 more minutes.",
            "Serve hot with rice."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "10g",
            "carbs": "40g",
            "fat": "10g"
        }
    },
    {
        "name": "Goan Prawn Balchao",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Prawns", "amount": "500g, cleaned" },
            { "name": "Vinegar", "amount": "3 tbsp" },
            { "name": "Onion", "amount": "2, sliced" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Garlic", "amount": "4 cloves, minced" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaJKfxHwSpKlzYIEPtJl5mptvFP9R9aLPtg&s",
        "details": "A spicy Goan prawn pickle made with vinegar and spices.",
        "instructions": [
            "Marinate prawns with vinegar, red chili powder, and salt for 15 minutes.",
            "Heat oil in a pan, sauté onions and garlic until golden.",
            "Add chopped tomatoes and cook until soft.",
            "Add marinated prawns and cook on medium heat until done.",
            "Serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "25g",
            "carbs": "10g",
            "fat": "15g"
        }
    },
    {
        "name": "Bengali Aloo Posto",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Potatoes", "amount": "3 medium, diced" },
            { "name": "Poppy Seeds", "amount": "3 tbsp" },
            { "name": "Green Chilies", "amount": "2, slit" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Mustard Oil", "amount": "2 tbsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8-MDWY2WH3XLMsPfsnyhODPucwc07H6-rQ&s",
        "details": "A traditional Bengali dish made with potatoes and poppy seeds, cooked with green chilies and spices.",
        "instructions": [
            "Grind poppy seeds into a smooth paste with a little water.",
            "Heat mustard oil in a pan, sauté green chilies and turmeric.",
            "Add diced potatoes and cook until lightly golden.",
            "Add the poppy seed paste and salt. Cook until potatoes are tender.",
            "Serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "250 kcal",
            "protein": "5g",
            "carbs": "40g",
            "fat": "10g"
        }
    },
    {
        "name": "Hyderabadi Bagara Baingan",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Eggplant", "amount": "6 small, slit" },
            { "name": "Peanuts", "amount": "2 tbsp" },
            { "name": "Sesame Seeds", "amount": "1 tbsp" },
            { "name": "Coconut (Grated)", "amount": "2 tbsp" },
            { "name": "Tamarind Pulp", "amount": "2 tbsp" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "3 tbsp" }
        ],
        "image": "https://i.ytimg.com/vi/JaftxY70pH8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDGzAlEGTaWQDGYRwI6HruBpoG1Lw",
        "details": "A rich and flavorful Hyderabadi dish made with eggplants, peanuts, sesame seeds, and coconut.",
        "instructions": [
            "Roast peanuts, sesame seeds, and grated coconut until aromatic. Grind into a smooth paste with tamarind pulp and water.",
            "Heat oil in a pan, fry the slit eggplants until tender. Remove and set aside.",
            "In the same pan, add the paste, red chili powder, and salt. Cook until the oil separates.",
            "Add the fried eggplants to the paste and simmer for 10 minutes.",
            "Serve hot with rice or roti."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "10g",
            "carbs": "30g",
            "fat": "20g"
        }
    },
    {
        "name": "Makki di Roti and Sarson da Saag",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Mustard Greens", "amount": "2 cups, chopped" },
            { "name": "Spinach", "amount": "1 cup, chopped" },
            { "name": "Cornmeal", "amount": "1 cup" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Green Chilies", "amount": "2, chopped" },
            { "name": "Butter", "amount": "2 tbsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://c.ndtvimg.com/2022-07/g2rnr1u_saag_120x90_08_July_22.png",
        "details": "A traditional Punjabi dish made with mustard greens and spinach, served with cornmeal flatbread.",
        "instructions": [
            "Cook mustard greens, spinach, green chilies, salt, and water until tender. Blend into a smooth paste.",
            "Heat butter in a pan, sauté onions, garlic, and ginger until golden. Add the blended greens and simmer for 10 minutes.",
            "Make a dough with cornmeal and water, roll into flatbreads, and cook on a hot griddle until golden.",
            "Serve hot with saag and a dollop of butter."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "10g",
            "carbs": "50g",
            "fat": "10g"
        }
    },
    {
        "name": "Daal Baati Churma",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Wheat Flour", "amount": "2 cups" },
            { "name": "Lentils (Toor Dal)", "amount": "1 cup" },
            { "name": "Ghee", "amount": "1/2 cup" },
            { "name": "Sugar", "amount": "1/4 cup" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3_lgMC3-xXXXKrMcL4K1XPqU2ZJG_7gYfg&s",
        "details": "A traditional Rajasthani dish consisting of baked wheat balls, lentil curry, and sweetened wheat crumbs.",
        "instructions": [
            "Knead wheat flour with ghee and water into a stiff dough. Shape into balls and bake until golden brown.",
            "Cook lentils with turmeric, chili powder, and salt until soft. Temper with ghee and spices.",
            "Crumble baked wheat balls, mix with ghee and sugar to make churma.",
            "Serve hot with daal and churma on the side."
        ],
        "nutrition": {
            "calories": "600 kcal",
            "protein": "15g",
            "carbs": "80g",
            "fat": "25g"
        }
    },
    {
        "name": "Pongal",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Rice", "amount": "1 cup" },
            { "name": "Green Gram (Moong Dal)", "amount": "1/2 cup" },
            { "name": "Ghee", "amount": "2 tbsp" },
            { "name": "Cashew Nuts", "amount": "10, halved" },
            { "name": "Black Pepper", "amount": "1 tsp" },
            { "name": "Cumin Seeds", "amount": "1/2 tsp" },
            { "name": "Ginger", "amount": "1 tsp, grated" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Water", "amount": "3 cups" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBmE0b4BpFAAHQfz5IMznj4Pq-CGtCarhXA&s",
        "details": "A traditional South Indian dish made with rice and green gram, flavored with ghee and spices.",
        "instructions": [
            "Wash rice and green gram, then cook with water until soft.",
            "Heat ghee in a pan, add cashew nuts, black pepper, cumin seeds, and grated ginger. Sauté until fragrant.",
            "Mix the ghee-spice mixture into the cooked rice and dal. Add salt and stir well.",
            "Serve hot with coconut chutney or sambar."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "10g",
            "carbs": "60g",
            "fat": "10g"
        }
    },
    {
        "name": "Fish Curry",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Fish", "amount": "500g, cleaned" },
            { "name": "Coconut", "amount": "1/2 cup, grated" },
            { "name": "Onion", "amount": "2, sliced" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Turmeric", "amount": "1/4 tsp" },
            { "name": "Red Chili Powder", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTqTG_kkF7zKf6HI6N6-GP7rI3BHO1Lp72Ig&s",
        "details": "A tangy and spicy fish curry from Goa, made with coconut and aromatic spices.",
        "instructions": [
            "Marinate fish with turmeric, red chili powder, and salt for 15 minutes.",
            "Heat oil in a pan, sauté onions until golden, then add tomatoes and cook until soft.",
            "Add grated coconut and cook for 2-3 minutes.",
            "Add the marinated fish and simmer on low heat until fully cooked.",
            "Serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "25g",
            "carbs": "10g",
            "fat": "15g"
        }
    },
    {
        "name": "Litti Chokha",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Wheat Flour", "amount": "2 cups" },
            { "name": "Sattu (Roasted Gram Flour)", "amount": "1 cup" },
            { "name": "Mustard Oil", "amount": "2 tbsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Brinjal (Eggplant)", "amount": "1, roasted" },
            { "name": "Tomato", "amount": "1, roasted" },
            { "name": "Garlic", "amount": "4 cloves, minced" },
            { "name": "Green Chilies", "amount": "2, chopped" },
            { "name": "Coriander Leaves", "amount": "1 tbsp, chopped" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIFj2-k24VCvli2B9RSOHjyXfmkf8e2finTQ&s",
        "details": "A traditional dish from Bihar, consisting of wheat flour balls stuffed with sattu and served with mashed vegetables.",
        "instructions": [
            "Prepare a dough with wheat flour, water, and a pinch of salt. Set aside.",
            "Mix sattu with mustard oil, salt, and spices to prepare the stuffing.",
            "Divide the dough into balls, stuff with the sattu mixture, and seal.",
            "Bake or roast the litti until golden brown.",
            "Mash roasted brinjal, tomato, garlic, green chilies, and coriander leaves to make chokha. Season with salt.",
            "Serve hot litti with chokha."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "15g",
            "carbs": "60g",
            "fat": "10g"
        }
    },
    {
        "name": "Misal Pav",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Moth Beans (Matki)", "amount": "1 cup, soaked" },
            { "name": "Onion", "amount": "2, chopped" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Ginger-Garlic Paste", "amount": "1 tbsp" },
            { "name": "Misal Masala", "amount": "2 tbsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" },
            { "name": "Pav Bread", "amount": "4 pieces" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV5GYGficxiixo-hb1KcoipQW2A3oK3IrRZQ&s",
        "details": "A spicy and tangy lentil curry from Maharashtra, served with pav bread.",
        "instructions": [
            "Cook soaked moth beans until tender and set aside.",
            "Heat oil in a pan, sauté onions until golden, then add ginger-garlic paste and tomatoes.",
            "Add misal masala and cooked moth beans. Simmer for 10 minutes.",
            "Serve hot misal with toasted pav bread, topped with chopped onions and lemon wedges."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "10g",
            "carbs": "50g",
            "fat": "10g"
        }
    },
    {
        "name": "Kafuli",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Spinach", "amount": "2 cups, chopped" },
            { "name": "Fenugreek Leaves", "amount": "1 cup, chopped" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Cumin", "amount": "1 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTf6vlrguzH-sPmqYc97fbXFkpOg8wCsl-sA&s",
        "details": "A nutritious dish from Uttarakhand, made with spinach and fenugreek leaves.",
        "instructions": [
            "Cook spinach and fenugreek leaves with cumin, coriander powder, turmeric, and salt.",
            "Blend the cooked greens to a smooth consistency.",
            "In a separate pan, sauté onions, garlic, and ginger until golden.",
            "Add the blended greens and cook for 5-10 minutes.",
            "Serve hot with rice."
        ],
        "nutrition": {
            "calories": "200 kcal",
            "protein": "8g",
            "carbs": "20g",
            "fat": "10g"
        }
    },
    {
        "name": "Chakhwi",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Pork", "amount": "200g, cut into pieces" },
            { "name": "Chicken", "amount": "200g, cut into pieces" },
            { "name": "Bamboo Shoot", "amount": "1/2 cup, sliced" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Ginger", "amount": "1 inch, minced" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Spices", "amount": "as per taste" },
            { "name": "Oil", "amount": "2 tbsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCv9nqvM-sFNvo2vt-fuQ1Qx4IaFJ_v4YY6w&s",
        "details": "A delicious main course dish from Tripura, mainly prepared with pork and chicken, and flavored with bamboo shoot.",
        "instructions": [
            "Cook pork and chicken with spices until tender.",
            "Add bamboo shoot and simmer until cooked through.",
            "Serve hot with rice."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "30g",
            "carbs": "10g",
            "fat": "25g"
        }
    },
    {
        "name": "Rugra",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Rugra Mushrooms", "amount": "1 cup, chopped" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Tomato", "amount": "1, chopped" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Cumin", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkncmx_euoDXx8dzyXNaePzqwl5is-OUCRw&s",
        "details": "A traditional dish from Jharkhand, made with rugra mushrooms, which are rich in protein and minerals.",
        "instructions": [
            "Sauté onions and tomatoes until soft.",
            "Add rugra mushrooms, coriander powder, cumin, turmeric, and salt.",
            "Cook until mushrooms are tender and flavors are blended.",
            "Serve hot with rice or roti."
        ],
        "nutrition": {
            "calories": "250 kcal",
            "protein": "10g",
            "carbs": "30g",
            "fat": "10g"
        }
    },
    {
        "name": "Chenna Poda",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Cottage Cheese", "amount": "200g, crumbled" },
            { "name": "Semolina (Rava)", "amount": "1/2 cup" },
            { "name": "Sugar", "amount": "1/2 cup" },
            { "name": "Cardamom", "amount": "1/2 tsp" },
            { "name": "Ghee", "amount": "2 tbsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk4X2auK9bybOymIgLXWU2jUTuWl35ej4Emw&s",
        "details": "A popular dessert from Odisha, made with cottage cheese and semolina, baked until caramelized.",
        "instructions": [
            "Mix crumbled cottage cheese, semolina, sugar, and cardamom.",
            "Pour the mixture into a greased tray and bake at 180°C for 30-40 minutes or until golden and caramelized.",
            "Serve warm or at room temperature."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "10g",
            "carbs": "40g",
            "fat": "10g"
        }
    },
    {
        "name": "Appam with Stew",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Rice", "amount": "1 cup" },
            { "name": "Coconut", "amount": "1/2 cup, grated" },
            { "name": "Chicken", "amount": "500g, cut into pieces" },
            { "name": "Mixed Vegetables", "amount": "1 cup (carrot, beans, potato)" },
            { "name": "Coconut Milk", "amount": "1 cup" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Ginger-Garlic Paste", "amount": "1 tbsp" },
            { "name": "Turmeric", "amount": "1/2 tsp" },
            { "name": "Cumin Powder", "amount": "1 tsp" },
            { "name": "Coriander Powder", "amount": "1 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "for cooking" }
        ],
        "image": "https://i.ytimg.com/vi/pDyRKvvFiYc/maxresdefault.jpg",
        "details": "A traditional dish from Kerala, consisting of rice pancakes (appam) served with a coconut-based chicken stew.",
        "instructions": [
            "Prepare the appam batter by grinding rice and grated coconut together, then ferment the batter overnight.",
            "Cook the appam on a hot griddle until crispy and golden on the edges.",
            "Cook chicken and vegetables with coconut milk, turmeric, cumin powder, coriander powder, and ginger-garlic paste to make a stew.",
            "Serve hot appam with stew."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "20g",
            "carbs": "50g",
            "fat": "15g"
        }
    },
    {
        "name": "Pootharekulu",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Rice Batter", "amount": "1 cup" },
            { "name": "Ghee", "amount": "2 tbsp" },
            { "name": "Sugar", "amount": "1/4 cup" },
            { "name": "Dry Fruits", "amount": "1/4 cup (cashews, almonds)" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSkaJFXoiuUttZ_Nx7BxbieLPHcANvyQnJA&s",
        "details": "A popular sweet dish from Andhra Pradesh, made with rice batter, ghee, and sugar, often stuffed with dry fruits.",
        "instructions": [
            "Prepare thin sheets with rice batter by spreading it thin on a flat surface.",
            "Layer each sheet with ghee and sugar.",
            "Stuff the sheets with dry fruits and roll them up tightly.",
            "Serve as a sweet snack."
        ],
        "nutrition": {
            "calories": "350 kcal",
            "protein": "5g",
            "carbs": "60g",
            "fat": "10g"
        }
    },
    {
        "name": "Masor Tenga",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Fish", "amount": "500g, cleaned" },
            { "name": "Tomato", "amount": "2, chopped" },
            { "name": "Lemon", "amount": "1, juiced" },
            { "name": "Turmeric", "amount": "1/4 tsp" },
            { "name": "Red Chili Powder", "amount": "1/2 tsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Water", "amount": "2 cups" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7q-s7ZwnUfojoOf41iRihxZXHIscnM3rpmQ&s",
        "details": "A tangy fish curry from Assam, made with tomatoes and lemon.",
        "instructions": [
            "Marinate fish with turmeric, red chili powder, and salt for 15 minutes.",
            "Sauté chopped tomatoes in a pot, add water to make a broth.",
            "Add marinated fish and cook on low heat until the fish is tender.",
            "Add lemon juice and serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "250 kcal",
            "protein": "20g",
            "carbs": "10g",
            "fat": "15g"
        }
    },
    {
        "name": "Momos",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Flour", "amount": "2 cups" },
            { "name": "Chicken", "amount": "250g, minced" },
            { "name": "Cabbage", "amount": "1/2 cup, finely chopped" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Ginger", "amount": "1 tsp, minced" },
            { "name": "Garlic", "amount": "2 cloves, minced" },
            { "name": "Soy Sauce", "amount": "1 tbsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Oil", "amount": "for steaming" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGwiAyNN9b_OHMb7-z6tXzj7ureQB803cjA&s",
        "details": "A popular Tibetan dish from Sikkim, made with steamed dumplings filled with chicken and vegetables.",
        "instructions": [
            "Prepare dough with flour and water, knead until smooth.",
            "Mix minced chicken, chopped cabbage, onion, ginger, garlic, soy sauce, and salt for filling.",
            "Shape dough into small dumplings, fill with the chicken mixture, and seal tightly.",
            "Steam the dumplings until cooked through and serve hot with dipping sauce."
        ],
        "nutrition": {
            "calories": "200 kcal",
            "protein": "10g",
            "carbs": "30g",
            "fat": "5g"
        }
    },
    {
        "name": "Iromba",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Fermented Fish", "amount": "2 tbsp" },
            { "name": "Potatoes", "amount": "4, boiled and mashed" },
            { "name": "Green Chilies", "amount": "2, chopped" },
            { "name": "Spices", "amount": "as per taste" }
        ],
        "image": "https://thetraditionalbawarchi.wordpress.com/wp-content/uploads/2021/04/iromba.jpeg?w=1024",
        "details": "A traditional dish from Manipur, made with fermented fish and mashed potatoes.",
        "instructions": [
            "Boil potatoes until soft.",
            "Mash the potatoes with fermented fish and chopped green chilies.",
            "Add spices like turmeric and salt, and mix well.",
            "Serve as a side dish."
        ],
        "nutrition": {
            "calories": "150 kcal",
            "protein": "5g",
            "carbs": "30g",
            "fat": "2g"
        }
    },
    {
        "name": "Jadoh",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Rice", "amount": "1 cup" },
            { "name": "Pork", "amount": "200g, chopped" },
            { "name": "Onion", "amount": "1, chopped" },
            { "name": "Spices", "amount": "as per taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3hAOVE4LZgEN5BhrOfAhcgMpycicTMHbDA&s",
        "details": "A traditional rice and pork dish from Meghalaya, flavored with local spices.",
        "instructions": [
            "Cook rice with water until done.",
            "Sauté pork with onions and spices until tender.",
            "Mix the cooked rice with the pork mixture.",
            "Serve hot."
        ],
        "nutrition": {
            "calories": "400 kcal",
            "protein": "20g",
            "carbs": "50g",
            "fat": "15g"
        }
    },
    {
        "name": "Bamboo Shoot Fry",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Bamboo Shoots", "amount": "1 cup, sliced" },
            { "name": "Onion", "amount": "1, finely chopped" },
            { "name": "Garlic", "amount": "3 cloves, minced" },
            { "name": "Spices", "amount": "as per taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3Ij2hce7b1U_dIKc1pF2s9Yb2OlF3DM3VA&s",
        "details": "A popular dish from Arunachal Pradesh, made with bamboo shoots and spices.",
        "instructions": [
            "Sauté onions and garlic in oil.",
            "Add bamboo shoots and spices, and stir-fry.",
            "Cook until bamboo shoots are tender.",
            "Serve hot with rice."
        ],
        "nutrition": {
            "calories": "200 kcal",
            "protein": "5g",
            "carbs": "30g",
            "fat": "5g"
        }
    },
    {
        "name": "Thukpa",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Noodles", "amount": "1 cup" },
            { "name": "Chicken", "amount": "200g, chopped" },
            { "name": "Vegetables", "amount": "1 cup, mixed" },
            { "name": "Spices", "amount": "as per taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqHPIC231o6RzomkALYAsp0vWH59TIksbsg&s",
        "details": "A popular noodle soup from Arunachal Pradesh, made with chicken and vegetables.",
        "instructions": [
            "Cook noodles according to package instructions.",
            "Sauté chicken and vegetables with spices.",
            "Add cooked noodles and broth to the mixture.",
            "Simmer for 5 minutes and serve hot."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "20g",
            "carbs": "40g",
            "fat": "10g"
        }
    },
    {
        "name": "Sel Roti",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Rice flour", "amount": "2 cups" },
            { "name": "Sugar", "amount": "1/4 cup" },
            { "name": "Ghee", "amount": "2 tbsp" },
            { "name": "Water", "amount": "1/2 cup" },
            { "name": "Cardamom powder", "amount": "1/4 tsp" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWp0y73Su1JRtLaMosifqORsYCdGPLyz4zA&s",
        "details": "A traditional sweet rice bread from Sikkim, often prepared during festivals.",
        "instructions": [
            "Prepare the batter by mixing rice flour, sugar, water, and cardamom powder.",
            "Heat ghee in a pan.",
            "Pour the batter into the pan in a circular shape to form a roti.",
            "Fry until golden brown on both sides.",
            "Serve hot."
        ],
        "nutrition": {
            "calories": "250 kcal",
            "protein": "5g",
            "carbs": "50g",
            "fat": "5g"
        }
    },
    {
        "name": "Pakhala Bhata",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Rice", "amount": "2 cups, cooked" },
            { "name": "Yogurt", "amount": "1/2 cup" },
            { "name": "Cucumber", "amount": "1, chopped" },
            { "name": "Mint", "amount": "1 tbsp, chopped" },
            { "name": "Spices (Cumin, Salt)", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZToyy4Gc4mF5pBHNRllgnGZQ-EYKJDcILA&s",
        "details": "A traditional dish from Odisha, made with fermented rice and yogurt.",
        "instructions": [
            "Cook rice and let it cool to room temperature.",
            "Mix rice with yogurt, chopped cucumber, mint, and spices.",
            "Let it ferment for a few hours at room temperature.",
            "Serve chilled."
        ],
        "nutrition": {
            "calories": "200 kcal",
            "protein": "5g",
            "carbs": "40g",
            "fat": "2g"
        }
    },
    {
        "name": "Dhaam",
        "dietary": "Vegetarian",
        "ingredients": [
            { "name": "Lentils", "amount": "1 cup" },
            { "name": "Rice", "amount": "1 cup" },
            { "name": "Curd", "amount": "1/2 cup" },
            { "name": "Spices (Cumin, Garam Masala)", "amount": "to taste" },
            { "name": "Jaggery", "amount": "for serving" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHAiwJbbmf4V8k7nOidU2yJZAmce-e6kq4A&s",
        "details": "A traditional Himachali dish, served during festivals and special occasions.",
        "instructions": [
            "Cook lentils and rice separately until soft.",
            "Mix the cooked lentils and rice with curd and spices.",
            "Serve hot with jaggery on the side."
        ],
        "nutrition": {
            "calories": "300 kcal",
            "protein": "10g",
            "carbs": "50g",
            "fat": "5g"
        }
    },
    {
        "name": "Vindaloo",
        "dietary": "Non-Vegetarian",
        "ingredients": [
            { "name": "Pork", "amount": "500g, cut into pieces" },
            { "name": "Vinegar", "amount": "2 tbsp" },
            { "name": "Garlic", "amount": "4 cloves, minced" },
            { "name": "Onion", "amount": "1, sliced" },
            { "name": "Spices (Cumin, Coriander, Red Chili)", "amount": "to taste" }
        ],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3YUYW5E3erbADl5b0R6M8FJ5mHInY9J2BA&s",
        "details": "A spicy Goan curry made with pork, vinegar, and aromatic spices.",
        "instructions": [
            "Marinate pork with vinegar and spices for 30 minutes.",
            "Sauté garlic and onions in oil until golden.",
            "Add marinated pork and cook on medium heat until tender.",
            "Serve hot with steamed rice."
        ],
        "nutrition": {
            "calories": "500 kcal",
            "protein": "30g",
            "carbs": "10g",
            "fat": "35g"
        }
    },
    {
    "name": "Puttu and Kadala Curry",
    "dietary": "Vegetarian",
    "ingredients": [
        { "name": "Rice flour", "amount": "1 cup" },
        { "name": "Coconut", "amount": "1/2 cup, grated" },
        { "name": "Black chickpeas", "amount": "1 cup, soaked overnight" },
        { "name": "Spices", "amount": "as per taste (e.g., turmeric, cumin, coriander)" }
    ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73-o5xkexNRbq46OLuoimYms24ZUxDC-f1w&s",
    "details": "A traditional breakfast dish from Kerala, made with steamed rice flour and coconut, served with chickpea curry.",
    "instructions": [
        "Mix rice flour with water and steam it with grated coconut in a puttu maker or a steaming setup.",
        "Cook black chickpeas with turmeric, cumin, coriander, and salt until soft. Prepare a curry by adding water to the cooked chickpeas.",
        "Serve the hot puttu with kadala curry on the side."
    ],
    "nutrition": {
        "calories": "350 kcal",
        "protein": "15g",
        "carbs": "60g",
        "fat": "10g"
    }
    },
    
];



    // Add more recipies
// Handle form submission to get recipes by ingredients, name, and dietary filter
document.getElementById("ingredient-form").addEventListener("submit", function (event) {
    event.preventDefault();
    filterRecipes();
});

// Filter recipes based on ingredients, name, and dietary preference
function filterRecipes() {
    const input = document.getElementById("ingredients-input").value.trim().toLowerCase();
    const filterDietary = document.getElementById("recipe-filter").value.toLowerCase();

    if (!input) {
        displayRecipes([]);
        return;
    }

    // Split search input into separate terms (comma separated)
    const searchTerms = input.split(",").map(term => term.trim());

    const filteredRecipes = recipes.filter(recipe => {
        const matchesDietary =
            filterDietary === "all" || recipe.dietary.toLowerCase() === filterDietary;

        // Check if the recipe name or any of the ingredients match the search terms
        const matchesSearch =
            recipe.name.toLowerCase().includes(input) || // Match by recipe name
            searchTerms.every(term => 
                recipe.ingredients.some(ingredient =>
                    ingredient.name.toLowerCase().includes(term) // Match by ingredient name
                )
            );

        return matchesDietary && matchesSearch;
    });

    displayRecipes(filteredRecipes);
}

// Display recipes based on the filtered results
function displayRecipes(filteredRecipes) {
    const recipeResults = document.getElementById("recipe-results");
    recipeResults.innerHTML = "";

    if (filteredRecipes.length === 0) {
        recipeResults.innerHTML = "<p>No recipes found. Please refine your search.</p>";
        return;
    }

    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.setAttribute("draggable", "true");
        recipeCard.setAttribute("data-recipe-name", recipe.name);

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>${recipe.details}</p>
            <div class="nutrition">Calories: ${recipe.nutrition.calories}</div>
        `;

        recipeCard.addEventListener("click", () => openRecipeModal(recipe));

        recipeCard.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text", recipe.name);
        });

        recipeResults.appendChild(recipeCard);
    });
}

// Function to open recipe modal
function openRecipeModal(recipe) {
    document.getElementById("recipe-name").textContent = recipe.name;
    document.getElementById("recipe-description").textContent = recipe.details;


 // Set recipe image source
 const recipeImage = document.getElementById("recipe-image");
 recipeImage.src = recipe.image;
 recipeImage.alt = recipe.name;
 
/*
    const ingredientsList = document.getElementById("recipe-ingredients");
    ingredientsList.innerHTML = "";
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

*/
// Populate Ingredients with amounts
const ingredientsList = document.getElementById("recipe-ingredients");
ingredientsList.innerHTML = ""; // Clear previous list
recipe.ingredients.forEach(ingredient => {
    const li = document.createElement("li");
    li.textContent = ingredient.name + ": " + ingredient.amount;  // Corrected: properly concatenate name and amount
    ingredientsList.appendChild(li);
});


    const instructionsList = document.getElementById("recipe-instructions");
    instructionsList.innerHTML = "";
    recipe.instructions.forEach(instruction => {
        const li = document.createElement("li");
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });

    const nutritionText = `
        Calories: ${recipe.nutrition.calories}, Protein: ${recipe.nutrition.protein}, 
        Carbs: ${recipe.nutrition.carbs}, Fat: ${recipe.nutrition.fat}
    `;
    document.getElementById("recipe-nutrition").textContent = nutritionText;

    document.getElementById("recipe-modal").style.display = "block";
}

// Close the recipe modal
document.querySelector("#recipe-modal .close-btn").addEventListener("click", () => {
    document.getElementById("recipe-modal").style.display = "none";
});

// About modal logic
const aboutSymbol = document.getElementById("about-symbol");
const aboutModal = document.getElementById("about-modal");
const aboutCloseBtn = document.querySelector("#about-modal .close-btn");

aboutSymbol.addEventListener("click", () => {
    aboutModal.style.display = "block";
});

aboutCloseBtn.addEventListener("click", () => {
    aboutModal.style.display = "none";
});

// Close modals when clicking outside content
window.addEventListener("click", (event) => {
    if (event.target === document.getElementById("recipe-modal")) {
        document.getElementById("recipe-modal").style.display = "none";
    }
    if (event.target === document.getElementById("about-modal")) {
        aboutModal.style.display = "none";
    }
});

// Allow drop on meal planner days
const days = document.querySelectorAll(".day");
days.forEach(day => {
    day.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    day.addEventListener("drop", (event) => {
        const recipeName = event.dataTransfer.getData("text");
        const recipe = recipes.find(r => r.name === recipeName);
        if (recipe) {
            const mealDiv = document.createElement("div");
            mealDiv.classList.add("meal");
            mealDiv.innerHTML = `
                ${recipe.name}<br>Calories: ${recipe.nutrition.calories} 
                <button class="remove-btn">Remove</button>
            `;

            const mealsInDay = day.querySelectorAll(".meal").length;
            if (mealsInDay < 3) {
                day.appendChild(mealDiv);
                mealDiv.querySelector(".remove-btn").addEventListener("click", () => {
                    mealDiv.remove();
                });
            } else {
                alert("You can only add up to 3 meals per day.");
            }
        }
    });
});


// Enhanced PDF Download functionality (from the second code)

document.getElementById("download-pdf").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    

    // Add background image
    const img = new Image();
    img.src = 'https://marketplace.canva.com/EAFZDTQgdnI/1/0/1131w/canva-gold-elegant-picture-record-a4-document-kL9d6SM-QlM.jpg'; // Replace with the path to your image
    img.onload = function() {
        // Add the image as the background
        doc.addImage(img, 'JPEG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
    
    // Add a title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Weekly Meal Plan", 105, 40, { align: "center" });

    // Create a table of meals
    const tableData = [];

    tableData.push(["","","",""]);

    document.querySelectorAll(".day").forEach(day => {
        const meals = day.querySelectorAll(".meal");
        const dayMeals = [];

        meals.forEach(meal => {
            const mealName = meal.innerText.split("\n")[0]; // Get the meal name
             // Get the calorie count from the data attribute
            dayMeals.push(mealName +'' ); // Correctly concatenate the meal name and calories
        });

        // Add a new row for the day
        tableData.push([
            day.id,                // Day (e.g., Monday, Tuesday)
            dayMeals[0] || "",     // Meal 1 (with recipe name and calories)
            dayMeals[1] || "",     // Meal 2 (with recipe name and calories)
            dayMeals[2] || ""      // Meal 3 (with recipe name and calories)
        ]);
        tableData.push(["","","",""]);
    });
      
// Define the table structure
doc.autoTable({
    head: [["Day", "Meal 1", "Meal 2", "Meal 3"]],
    body: tableData,
    startY: 60,
});

// Add a footer
doc.setFontSize(10);
doc.text("Generated by Recipe Finder and Meal Planner", 105, 275, { align: "center" });


    
    // Save the PDF
    doc.save("Meal_Planner.pdf");
}});

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Exercise Recommendations</title>
    <style>
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
        }

        body {
            font-family: 'PrimaryMuscleFont', sans-serif;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 1000px;
            margin: 80px auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* CSS for Section */
        .section {
            display: flex;
            font-size: 1.125rem;
            flex-direction: column;
            width: 100%;
            max-width: 100%;
        }

        .section h2 {
            font-size: 24px;
            margin: 10px 0;
        }

        /* Checkbox styles */
        label {
            display: inline-flex;
            align-items: center;
            margin: 10px 0;
        }

        input[type="checkbox"],
        input[type="radio"] {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }

        /* Three-column layout styles */
        .section-three-column {
            display: flex;
            justify-content: space-between;
            border: none;
            align-content: flex-start;
            font-size: 1.125rem;
        }

        .column {
            margin-right: 18%;
        }

        /* Responsive layout styles */
        @media (max-width: 768px) {
            .section {
                width: 100%;
            }

            .column {
                flex-basis: calc(50% - 20px);
            }
        }

        /* Additional styles for buttons */
        .btn {
            background-color: #007BFF;
            color: #fff;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            margin-top: 20px;
            border-radius: .375rem;
        }

        .btn:hover {
            background-color: #0056b3;
        }

        /* CSS for Muscle Selection */
        .muscle-selection {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 0px;
            box-sizing: border-box;
            margin: 0;
            border: none;
        }

        select {
            width: 30%;
            padding: 5px;
            border: 1px solid #ddd;
            font-size: 1.125rem;
        }

        .muscle-layout {
            display: flex;
            justify-content: space between;
            align-items: flex-start;
            flex-grow: 1;
        }

        .muscle-list {
            width: 15%;
            text-align: center;
            box-sizing: border-box;
        }

        .muscle-list ul {
            list-style: none;
            padding: 0;
        }

        .muscle-list li {
            margin-bottom: 15px;
        }

        .muscle-list a {
            display: block;
            text-decoration: none;
            color: black;
            padding: 5px;
            transition: background-color 0.3s;
        }

        .muscle-list a:hover {
            background-color: #e0e0e0;
        }

        .muscle-picture {
            width: 70%;
            /* Adjust the width as needed */
            box-sizing: border-box;
        }

        .muscle-picture img {
            width: 100%;
        }

        /* CSS for Primary Muscle Buttons */
        .primaryMuscle {
            background: #fff;
            backface-visibility: hidden;
            border-radius: .375rem;
            border-style: solid;
            border-width: .11rem;
            box-sizing: border-box;
            color: #212121;
            cursor: pointer;
            display: inline-block;
            font-family: Circular, Helvetica, sans-serif;
            font-size: 1.125rem;
            font-weight: 600;
            letter-spacing: -.01em;
            padding: .8rem 1rem;
            width: 145px;
            text-align: left;
            text-decoration: none;
            transform: translateZ(0) scale(1);
            transition: transform .2s;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .primaryMuscle:not(:disabled):hover {
            transform: scale(1.05);
        }

        .primaryMuscle:not(:disabled):hover:active {
            transform: scale(1.05) translateY(.125rem);
        }

        .primaryMuscle:focus {
            outline: 0 solid transparent;
        }

        .primaryMuscle:focus:before {
            content: "";
            left: calc(-1*.375rem);
            pointer-events: none;
            position: absolute;
            top: calc(-1*.375rem);
            transition: border-radius;
            user-select: none;
        }

        .primaryMuscle:focus:not(:focus-visible) {
            outline: 0 solid transparent;
        }

        .primaryMuscle:focus:not(:focus-visible):before {
            border-width: 0;
        }

        .primaryMuscle:not(:disabled):active {
            transform: translateY(.125rem);
        }

        /* CSS for highlighting the selected primary muscle */
        .primaryMuscle.selected {
            background-color: #007bff;
            color: #fff;
        }

        /* Global styles */
        body {
            font-family: 'PrimaryMuscleFont', sans-serif;
            margin: 0;
            padding: 0;
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }

        .logo {
            display: flex;
            align-items: center;
        }

        .logo img {
            width: 88px;
            height: 50px;
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: flex-end;
        }

        nav ul li {
            margin: 0 15px;
            font-size: 1.2em;
        }

        nav ul li a {
            text-decoration: none;
            color:  #007BFF;
            font-weight: bold;
            transition: color 0.3s;
        }

        nav ul li a:hover {
            color: rgb(61, 229, 83);
        }
    </style>
</head>

<body>
    <header>
        <div class="logo">
            <a href="/welcome"><img src="{{ url_for('static', filename='logo_user.jpg') }}" alt="Logo"></a>
        </div>
        <nav>
            <ul>
                <li><a href="/welcome">Home</a></li>
                <li><a href="/beginner">Beginner</a></li>
                <li><a href="/advanced">Advanced</a></li>
            </ul>
        </nav>
    </header>
    <div class="container">
        <h1>Select Your Target Muscles And Preference Information</h1>
        <br></br>
        <div class="muscle-selection">
            <form method="POST" action="/advanced">
                <input type="hidden" name="selectedPrimaryMuscle" id="selectedPrimaryMuscle"
                    value="{{ selectedPrimaryMuscle }}">
                <div class="muscle-layout">
                    <div class="muscle-list">
                        <ul>
                            {% for muscle in primary_muscles[:9] %}
                            <li>
                                <button
                                    class="primaryMuscle{% if muscle == selectedPrimaryMuscle %} selected{% endif %}"
                                    type="button" data-muscle="{{ muscle }}"
                                    onclick="selectPrimaryMuscle('{{ muscle }}')">
                                    {{ muscle }}
                                </button>
                            </li>
                            {% endfor %}
                        </ul>
                    </div>
                    <div class="muscle-picture">
                        <img src="{{ url_for('static', filename='advanced.jpg') }}" alt="Human Body Picture">
                    </div>
                    <div class="muscle-list">
                        <ul>
                            {% for muscle in primary_muscles[9:] %}
                            <li>
                                <button
                                    class="primaryMuscle{% if muscle == selectedPrimaryMuscle %} selected{% endif %}"
                                    type="button" data-muscle="{{ muscle }}"
                                    onclick="selectPrimaryMuscle('{{ muscle }}')">
                                    {{ muscle }}
                                </button>
                            </li>
                            {% endfor %}
                        </ul>
                    </div>
                </div>
            </form>
        </div>
        <br></br><br></br>
        <form method="POST" action="/recommend">
            <!-- Secondary Muscles Options -->
            <h2>Secondary Muscles</h2>
            <div class="section">
                <div class="section-three-column">
                    <div class="column">
                        {% set secondary_muscles = ['Abdominals', 'Abductors', 'Adductors', 'Biceps', 'Calves', 'Chest']
                        %}
                        {% for muscle in secondary_muscles %}
                        <label for="{{ muscle }}">
                            <input type="checkbox" name="secondaryMuscles[]" value="{{ muscle }}" id="{{ muscle }}">
                            {{ muscle }}
                        </label>
                        {% endfor %}
                    </div>
                    <div class="column">
                        {% set secondary_muscles = ['Forearms','Glutes', 'Hamstrings', 'Lats', 'Lower Back', 'Middle
                        Back'] %}
                        {% for muscle in secondary_muscles %}
                        <label for="{{ muscle }}">
                            <input type="checkbox" name="secondaryMuscles[]" value="{{ muscle }}" id="{{ muscle }}">
                            {{ muscle }}
                        </label>
                        {% endfor %}
                    </div>
                    <div class="column">
                        {% set secondary_muscles = ['Neck', 'Quadriceps','Shoulders', 'Traps', 'Triceps'] %}
                        {% for muscle in secondary_muscles %}
                        <label for="{{ muscle }}">
                            <input type="checkbox" name="secondaryMuscles[]" value="{{ muscle }}" id="{{ muscle }}">
                            {{ muscle }}
                        </label>
                        {% endfor %}
                    </div>
                </div>
            </div>
            <!-- Level Options -->
            <h2>Level</h2>
            <div class="section">
                <label for="beginner">
                    <input type="radio" name="level" value="beginner" id="beginner">
                    Beginner
                </label>
                <label for="intermediate">
                    <input type="radio" name="level" value="intermediate" id="intermediate">
                    Intermediate
                </label>
                <label for="expert">
                    <input type="radio" name="level" value="expert" id="expert">
                    Expert
                </label>
            </div>

            <!-- Equipment Options -->
            <h2>Equipment</h2>
            <div class="section">
                <div class="section-three-column">
                    <div class="column">
                        {% set equipment_options = ['Body Only', 'Bands', 'Barbell', 'Cable'] %}
                        {% for option in equipment_options %}
                        <label for="{{ option }}">
                            <input type="radio" name="equipment" value="{{ option }}" id="{{ option }}">
                            {{ option | capitalize }}
                        </label>
                        {% endfor %}
                    </div>
                    <div class="column">
                        {% set equipment_options = ['Dumbbell', 'Exercise Ball', 'E-Z Curl Bar', 'Foam Roll'] %}
                        {% for option in equipment_options %}
                        <label for="{{ option }}">
                            <input type="radio" name="equipment" value="{{ option }}" id="{{ option }}">
                            {{ option | capitalize }}
                        </label>
                        {% endfor %}
                    </div>
                    <div class="column">
                        {% set equipment_options = ['Kettlebells', 'Machine', 'Medicine Ball', 'Other'] %}
                        {% for option in equipment_options %}
                        <label for="{{ option }}">
                            <input type="radio" name="equipment" value="{{ option }}" id="{{ option }}">
                            {{ option | capitalize }}
                        </label>
                        {% endfor %}
                    </div>
                </div>
            </div>
            <!-- Force Options -->
            <h2>Force</h2>
            <div class="section">
                <label for="pull">
                    <input type="radio" name="force" value="pull" id="pull">
                    Pull
                </label>
                <label for="push">
                    <input type="radio" name="force" value="push" id="push">
                    Push
                </label>
                <label for="static">
                    <input type="radio" name="force" value="static" id="static">
                    Static
                </label>
            </div>

            <!-- Mechanic Options -->
            <h2>Mechanic</h2>
            <div class="section">
                <label for="compound">
                    <input type="radio" name="mechanic" value="compound" id="compound">
                    Compound
                </label>
                <label for="isolation">
                    <input type="radio" name="mechanic" value="isolation" id="isolation">
                    Isolation
                </label>
            </div>

            <!-- Category Options -->
            <h2>Category</h2>
            <div class="section">
                {% set categories = ['Cardio', 'Olympic Weightlifting', 'Plyometrics', 'Powerlifting', 'Strength',
                'Stretching', 'Strongman'] %}
                <select name="category">
                    <option value="">Select a category</option>
                    {% for category in categories %}
                    <option value="{{ category }}">{{ category }}</option>
                    {% endfor %}
                </select>
            </div>
            <button type="submit" class="btn">Recommend Exercises</button>
            <a href="/beginner" onclick="clearSelectedPrimaryMuscle()"></a>
        </form>
    </div>
    <script>
        // Update selectPrimaryMuscle function
        function selectPrimaryMuscle(muscle) {
            selectedPrimaryMuscle = muscle;
            document.querySelector("#selectedPrimaryMuscle").value = muscle;
            // Store the selected primary muscle in a cookie or local storage
            document.cookie = `selectedPrimaryMuscle=${selectedPrimaryMuscle};path=/`; // Store in a cookie
            // Highlight the selected primary muscle
            var muscles = document.querySelectorAll('.primaryMuscle');
            muscles.forEach(function (elem) {
                elem.classList.remove('selected');
            });
            document.querySelector(`.primaryMuscle[data-muscle="${selectedPrimaryMuscle}"]`).classList.add('selected');

            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.addEventListener('click', () => {
                    section.classList.toggle('zoomed');
                });
            });
        }

        // Function to clear the selected primary muscle
        function clearSelectedPrimaryMuscle() {
            selectedPrimaryMuscle = null;
            document.querySelector("#selectedPrimaryMuscle").value = "";

            // Remove the 'selected' class from all primary muscles
            var muscles = document.querySelectorAll('.primaryMuscle');
            muscles.forEach(function (elem) {
                elem.classList.remove('selected');
            });
        }
    </script>
</body>

</html>

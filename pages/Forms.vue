<template>
    <div>

        <div class="container">

            <h1>forms</h1>

            <div class="section-padding-50"></div>
            <h3 class="margin-bottom-2">Basic Form Elements</h3>

            <div class="grid-x grid-margin-x grid-margin-y">
                <div class="cell auto">
                    <p><strong>Inputs &amp; Text Areas</strong></p>
                    <label>Text Input
                        <input type="text" id="test" placeholder="placeholder text">
                    </label>
                    <label>
                        Number Input
                        <input type="number" value="100">
                    </label>
                    <label>Password Input
                        <input type="password" aria-describedby="passwordHelpText" placeholder="password">
                    </label>
                    <label>Text Area
                        <textarea placeholder="placeholder text"></textarea>
                    </label>
                    <p><strong>Inline buttons</strong></p>
                    <div class="input-group">
                      <label for="inline-input" class="hide-ally-element">Label</label>
                            <input id="inline-input" class="input-group-field" type="number">
                            <div class="input-group-button">
                                <input type="submit" class="button" value="Submit">
                            </div>
                    </div>
                </div>
                <div class="cell auto">
                    <p><strong>Select Menus</strong></p>
                    <label>Single Select Menu
                        <select>
                            <option value="starbuck">Starbuck</option>
                            <option value="husker">Husker</option>
                            <option value="hotdog">Hot Dog</option>
                            <option value="apollo">Apollo</option>
                        </select>
                    </label>
                    <label>Multiple Select Menu
                        <select multiple>
                            <option value="showboat">Showboat</option>
                            <option value="redwing">Redwing</option>
                            <option value="narcho">Narcho</option>
                            <option value="hardball">Hardball</option>
                        </select>
                    </label>
                    <fieldset class="large-5 cell">
                        <legend>Radio Buttons</legend>
                        <input type="radio" name="pokemon" value="Red" id="pokemonRed" required><label for="pokemonRed">Red</label>
                        <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"><label
                            for="pokemonBlue">Blue</label>
                        <input type="radio" name="pokemon" value="Yellow" id="pokemonYellow"><label for="pokemonYellow">Yellow</label>
                    </fieldset>
                    <fieldset class="large-7 cell">
                        <legend>Checkboxes</legend>
                        <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
                        <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
                        <input id="checkbox3" type="checkbox"><label for="checkbox3">Checkbox 3</label>
                    </fieldset>
                </div>
            </div>

            <div class="section-padding-100"></div>

        </div>

    </div>
</template>

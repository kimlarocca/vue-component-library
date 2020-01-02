<template>
  <div>
    <div class="container">
      <h1>accordions</h1>

      <hr class="margin-vertical-3" />

      <p>
        <strong>RULES &amp; DEPENDENCIES:</strong>
      </p>
      <p>
        <strong>accordion props:</strong>
      </p>
      <ul class="margin-bottom-2">
        <li>allowMultiple - set to true if multiple accordions are allowed to be open at once (optional)</li>
        <li>mobileOnly - set to true to transform content into accordions appear on mobile only (optional)</li>
        <li>closeAll - set to true if all accordions are closed on load (optional, by default the first item is open)</li>
      </ul>

      <p>
        <strong>accordion-item props:</strong>
      </p>
      <ul class="margin-bottom-2">
        <li>openOnLoad - set to true if you want this item to be open - only the first item is open by default</li>
      </ul>

      <p>
        <strong>accordion-item slots:</strong>
      </p>
      <ul>
        <li>header - this is the clickable header which opens and closes the accordion content</li>
        <li>content</li>
      </ul>

      <div class="section-padding-100"></div>

      <accordion>
        <accordion-item>
          <template slot="header">Header 1</template>
          <template slot="content">
            <div class="body-text1 like-p">
              Content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </div>
          </template>
        </accordion-item>
        <accordion-item>
          <template slot="header">Header 2</template>
          <template slot="content">
            <div class="body-text1 like-p">
              Content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </div>
          </template>
        </accordion-item>
        <accordion-item>
          <template slot="header">Header 3</template>
          <template slot="content">
            <div class="like-p">
              Content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </div>
          </template>
        </accordion-item>
      </accordion>

      <div class="section-padding-100"></div>

      <h6>Grid on desktop, accordions on mobile:</h6>

      <div class="section-padding-50"></div>

      <accordion mobileOnly="true" class="mobile-only no-border-on-desktop">
        <div class="grid-x grid-margin-x">
          <div class="cell large-4 medium-12 small-12">
            <accordion-item>
              <template slot="header">Schumann</template>
              <template slot="content">
                <div class="body-text3 like-p">
                  Robert Schumann told Franz Liszt that he considered the Manfred Overture to be one
                  of
                  his “most powerful children.” Schumann’s music for Lord Byron’s dramatic poem Manfred stressed the
                  musical
                  medium most deferential to poetry: the melodrama, in which text is recited over an accompanying score.
                  The
                  result is an odd musical hybrid, and of Schumann’s Manfred music only the Overture has found an
                  enduring
                  place in the repertory. In this somber work we find Schumann at his most demonic, setting the scene
                  for
                  Byron’s tortured hero with music of wide fluctuation, passionately designed melodies, and insistent
                  rhythms.
                </div>
                <div class="body-text3 like-p">
                  <strong>Listen for:</strong>
                  <br />This is a marvelously imagined piece of
                  scoring—hear,
                  for example, the economical and stunningly effective use of the trombones.
                </div>
                <div class="body-text3 like-p">
                  <a class="caret-right" href="#">
                    <strong>LEARN MORE</strong>
                  </a>
                </div>
              </template>
            </accordion-item>
          </div>
          <div class="cell large-4 medium-12 small-12">
            <accordion-item>
              <template slot="header">Header 2</template>
              <template slot="content">
                <div class="body-text1 like-p">header 2 content</div>
              </template>
            </accordion-item>
          </div>
          <div class="cell large-4 medium-12 small-12">
            <accordion-item>
              <template slot="header">Header 3</template>
              <template slot="content">
                <div class="like-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex
                  ea commodo consequat.
                </div>
              </template>
            </accordion-item>
          </div>
        </div>
      </accordion>

      <div class="section-padding-50"></div>
    </div>
  </div>
</template>

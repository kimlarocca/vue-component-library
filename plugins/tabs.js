import $ from 'jquery'

$(document).ready(function () {
    let index = 0
    let $tabs = $('a.tab')

    $tabs.bind(
        {
            // on keydown,
            // determine which tab to select
            keydown: function (ev) {
                let LEFT_ARROW = 37
                let UP_ARROW = 38
                let RIGHT_ARROW = 39
                let DOWN_ARROW = 40

                let k = ev.which || ev.keyCode

                // if the key pressed was an arrow key
                if (k >= LEFT_ARROW && k <= DOWN_ARROW) {
                    // move left one tab for left and up arrows
                    if (k === LEFT_ARROW || k === UP_ARROW) {
                        if (index > 0) {
                            index--
                            // eslint-disable-next-line brace-style
                        }
                            // unless you are on the first tab,
                        // in which case select the last tab.
                        else {
                            index = $tabs.length - 1
                        }
                        // eslint-disable-next-line brace-style
                    }

                    // move right one tab for right and down arrows
                    else if (k === RIGHT_ARROW || k === DOWN_ARROW) {
                        if (index < ($tabs.length - 1)) {
                            index++
                            // eslint-disable-next-line brace-style
                        }
                            // unless you're at the last tab,
                        // in which case select the first one
                        else {
                            index = 0
                        }
                    }

                    // trigger a click event on the tab to move to
                    $($tabs.get(index)).click()
                    ev.preventDefault()
                }
            },

            // just make the clicked tab the selected one
            click: function (ev) {
                index = $.inArray(this, $tabs.get())
                setFocus()
                ev.preventDefault()
            }
        })

    let setFocus = function () {
        // undo tab control selected state,
        // and make them not selectable with the tab key
        // (all tabs)
        $tabs.attr(
            {
                tabindex: '-1',
                'aria-selected': 'false'
            }).removeClass('selected')

        // hide all tab panels.
        $('.tab-content').removeClass('active')

        // make the selected tab the selected one, shift focus to it
        $($tabs.get(index)).attr(
            {
                tabindex: '0',
                'aria-selected': 'true'
            }).addClass('active').focus()

        // handle parent <li> current class (for coloring the tabs)
        $($tabs.get(index)).parent().siblings().removeClass('active')
        $($tabs.get(index)).parent().addClass('active')

        // add a current class also to the tab panel
        // controlled by the clicked tab
        $($($tabs.get(index)).attr('href')).addClass('active')
    }

    // use this function if you want to open particular tab on load
    // check hash
    if (window.location.hash) {
        // remove the # character
        let hash = window.location.hash.substring(1)
        openTab(hash)
    }

    // open tab based on the hash
    function openTab (hash) {
        let $this = $('#' + hash)
        let $tabs = $('a.tab')
        if ($this.length !== 0 && $tabs.length !== 0) {
            $tabs.attr(
                {
                    tabindex: '-1',
                    'aria-selected': 'false'
                }).addClass('active')
            // hide all tab panels.
            let $tabContent = $('.tab-content')
            $tabContent.removeClass('active')
            // make the selected tab the selected one, shift focus to it
            $this.removeClass('active').focus()
            $this.attr(
                {
                    tabindex: '0',
                    'aria-selected': 'true'
                })
            let $thisIndex = $($tabs).index($this)
            $tabContent.eq($thisIndex).addClass('active')
        }
    }
})

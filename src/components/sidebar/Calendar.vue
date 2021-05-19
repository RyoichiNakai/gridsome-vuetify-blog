<template>
  <v-card class="pa-2">
    <v-row>
      <v-col>
        <v-sheet height="64">
          <v-toolbar
            flat
          >
            <v-btn
              fab
              text
              small
              class="mr-2"
              @click="prev"
            >
              <v-icon small>
                fas fa-angle-left
              </v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar" width="100%">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-btn
              fab
              text
              small
              class="ml-2"
              @click="next"
            >
              <v-icon small>
                fas fa-angle-right
              </v-icon>
            </v-btn>
            <v-spacer/>
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  fab
                  icon
                  small
                  v-on="on"
                >
                  <v-icon>
                    far fa-calendar-alt
                  </v-icon>
                </v-btn>
              </template>
              <v-date-picker
                v-model="picker"
                @click="menu = false"
                no-title
                scrollable
                type="month"
              />
            </v-menu>

            <v-btn
              fab
              icon
              small
              @click="setToday"
            >
              <v-icon>
                fas fa-calendar-day
              </v-icon>
            </v-btn>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="380">
          <v-calendar
            ref="calendar"
            v-model="focus"
            type="month"
            locale="ja-jp"
            :day-format="(timestamp) => new Date(timestamp.date).getDate()"
            :month-format="(timestamp) => new Date(timestamp.date).getMonth() + 1 + ' /'"
            @click:event="showEvent"
            @click:date="setDate"
          >
            <template v-slot:day="{ past, date }">
              <v-row justify="center" style="margin-top: 2px">
                <v-avatar
                  v-if="past && tracked.includes(date)"
                  color="indigo"
                  class="mx-1"
                  size="8"
                >
                </v-avatar>
              </v-row>
            </template>
          </v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card
              color="grey lighten-4"
              min-width="350px"
              flat
            >
              <v-toolbar
                :color="selectedEvent.color"
                dark
              >
                <v-btn icon>
                  <v-icon></v-icon>
                </v-btn>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="secondary"
                  @click="selectedOpen = false"
                >
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  export default {
    name: 'Calendar',
    data: () => ({
      menu: false,
      focus: '',
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      tracked: [
        '2021-05-18',
        '2021-05-08',
        '2021-05-07',
        '2021-05-06',
        '2021-05-05',
        '2021-05-04',
        '2021-05-03',
        '2021-05-02',
        '2021-05-01',
      ],
      colors: ['#1867c0', '#fb8c00', '#000000'],
      category: ['Development', 'Meetings', 'Slacking'],
    }),
    mounted () {
      this.$refs.calendar.checkChange();
      this.focus = this.formatDate(new Date());
    },
    computed: {
      picker: {
        get() {
          return this.value;
        },
        set(val) {
          this.menu = false;
          val += '-01';
          this.focus = val;
        }
      }
    },
    methods: {
      setDate ({ date }) {
        this.focus = date;
        console.log(date);
      },
      setToday () {
        this.focus = this.formatDate(new Date());
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          requestAnimationFrame(() => requestAnimationFrame(() => open()))
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      formatDate(dt) {
        const y = dt.getFullYear();
        const m = ('00' + (dt.getMonth()+1)).slice(-2);
        const d = ('00' + dt.getDate()).slice(-2);
        return (y + '-' + m + '-' + d);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .dot {
    width: px;
    height: 20px;
    background-image: radial-gradient(blue 69%);
  }

</style>
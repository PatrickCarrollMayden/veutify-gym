<template>
  <div class="about" pa-6>
    <v-img src='/weights.jpg'>
    <h1>Workout Presets</h1>
    <v-row justify="center" class="pa-10">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Workouts List
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select Country</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group
            v-model="dialogm1"
            column
          >
            <v-radio
              label=Push
              value=1
              @click="workout = 'some push workout'"
            ></v-radio>
            <v-radio
              label=Pull
              value=2
              @click="workout = 'some pull workout'"
            ></v-radio>
            <v-radio
              label=Legs
              value=3
              @click="workout = 'some legs workout'"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-row>
    <template>
      <v-data-table
        :headers="headers"
        :items="exercises"
        :items-per-page="8"
        class="elevation-1"
      ></v-data-table>
</template>

    </v-img>
  </div>  
</template>

<script>
  export default {
    data () {
      return {
        dialogm1: '',
        dialog: false,
        workout: '',
        headers: [
          {
            text: 'Legs',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Sets', value: 'sets' },
          { text: 'Weight', value: 'weight' },
          { text: 'Variation', value: 'variation' },
        ],
        exercises: [
          {
            name: 'Barbell Squat Max',
            sets: '1 x 1',
            weight: 92.5,
            variation: 'Hack Squat',
          },
          {
            name: 'Barbell Squat Working',
            sets: '1 x 5',
            weight: 72.5,
            variation: 'N/A',
          },
          {
            name: 'RDL',
            sets: '3 x 8/12',
            weight: 'RPE 8-9',
            variation: 'Dumbell RDL',
          },
          {
            name: 'Leg Extension',
            sets: '3 x 10',
            weight: 'RPE 8/9',
            variation: 'Lunges',
          },
          {
            name: 'Leg Extension',
            sets: '1 x Failure',
            weight: 'RPE 10',
            variation: 'N/A',
          },
          {
            name: 'Hamstring Curls',
            sets: '3 x 10',
            weight: 'RPE 8/9',
            variation: 'Glute Ham raise',
          },
        ]
      }
    },
    }
</script>


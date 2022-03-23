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
    <span>Exercise: {{ workout }}</span>
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
      }
    },
    }
</script>


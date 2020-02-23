<template>
	<section>
		<v-row justify="center" class="mx-8">
			<v-card
				max-width="390px"
				max-height="350px"
				width="100%"
				height="40vh"
				class="mt-12">
			</v-card>
		</v-row>
		<v-row justify="center" class="mx-4">
			<v-card
				width="52px"
				height="52px"
				v-for="i in 2"
				:key="i+3"
				class="ma-2">
			</v-card>
			<v-card
				style="border:2px dashed #d6d6d6"
				flat width="52px"
				height="52px" v-for="i in 3" :key="i"
				class="
					ma-2
					d-flex
					justify-center
					align-center">
				<i class="fas fa-camera" style="color:#d6d6d6"/>
			</v-card>
		</v-row>
		<v-row justify="center">
			<v-col
				cols="12"
				sm="7"
				md="8"
				lg="6">
				<div style="font-size:11px; color:#788995" class="d-flex justify-center">
					Upload any related product images to boost your sales
				</div>
			</v-col>
		</v-row>
		<v-row class="mt-12">
			<v-col
				cols="12"
				sm="7"
				md="8"
				lg="6">
				</v-col>
				<FooterButton
					:onCancelUpload="onCancelUpload"
					:onSubmitUpload="onSubmitUpload"/>
		</v-row>
	</section>
</template>

<script>
import FooterButton from '../FooterButton'
export default {
	components:{
		FooterButton
	},
	props:{
		onCancelUpload: Function,
		onSubmitUpload: Function
	},
}
</script>

<style scoped>
.big-image{
  background-color: #D6D6D6;
  border-radius: 5px;
  margin-top: 70px
}
</style>
<template>
	<section class="px-4 px-lg-12">
		<div class="my-6 headline">
			Information
		</div>
		<v-row>
			<v-col cols="12" sm="6" lg="6">
				<div class="mb-2">
          PRODUCT NAME
        </div>
        <v-text-field single-line outlined hide-details> </v-text-field>
			</v-col>
			<v-col cols="12" sm="6" lg="6" xl="6">
				<div class="mb-2">
          PRICE
        </div>
        <v-text-field single-line outlined hide-details> </v-text-field>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<div class="mb-2">
					PRODUCT DESCRIPTION
				</div>
				<v-textarea rows="4" row-height="20px" single-line outlined hide-details> </v-textarea>
			</v-col>
		</v-row>
		<v-row>
			<!-- color -->
			<v-col cols="12" sm="6" lg="6" xl="6">
				<div class="ml-2">Color</div>
				<div class="d-flex">
					<v-card
						width="52px"
						height="52px"
						v-for="i in 6"
						:key="i"
						class="ma-2">
					</v-card>
				</div>
			</v-col>
			<!-- end -->
			<!-- catagory -->
			<v-col cols="12" sm="6" lg="6" xl="6">
				<div class="ml-2">
					CATEGORY
				</div>
				<v-select
					:items="items"
					label="Select your category"
					outlined
				></v-select>
			</v-col>
			<!-- end -->
		</v-row>
		<v-row >
			<v-col
				cols="12">
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
	data: ()=>({
		items: ['Categ1', 'Categ2']
	}),
	props:{
		onCancelUpload: Function,
		onSubmitUpload: Function
	},
}
</script>

<style>
</style>
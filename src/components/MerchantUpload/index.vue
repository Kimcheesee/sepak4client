<template>
	<v-container>
		<v-row justify="center">
			<v-col
				style="width:100%"
				cols="12">
				<v-tabs centered v-model="tab">
					<v-tab style="font-size:12px">Upload Photo</v-tab>
					<v-tab style="font-size:12px">Product Information</v-tab>
				</v-tabs>
				<v-tabs-items v-model="tab">
					<v-tab-item>
						<PhotoUpload
							:onCancelUpload="onCancelUpload"
							:onSubmitUpload="onSubmitUpload"/>
					</v-tab-item>
					<v-tab-item>
						<InformationUpload
							:onSubmitUpload="onSubmitUpload"
							:onCancelUpload="onCancelUpload"/>
					</v-tab-item>
				</v-tabs-items>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import PhotoUpload from '../../components/MerchantUpload/PhotoUpload'
import InformationUpload from '../../components/MerchantUpload/InformationUpload'
export default {
  components:{
    PhotoUpload,
    InformationUpload,
  },
  data:()=>({
    tab: null
	}),
	props:{
		onCancelUpload: Function,
		onSubmitUpload: Function
	}

}
</script>

<style scoped lang="scss">
@media screen and (max-width: 600px){
  #merchant-upload-section{
    margin-top: 56px
  }
}

</style>
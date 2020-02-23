<template>
	<div style="width:100%" class="d-flex justify-space-around">
		<v-btn depressed  @click="onCancelUpload">
			<i class="fas fa-arrow-left mr-2"/>
			Cancel
		</v-btn>
		<v-btn color="secondary" @click="onSubmitUpload">
			UPLOAD
		</v-btn>
	</div>
</template>

<script>
export default {
	props:{
		onCancelUpload: Function, //return to '/merchant' on mobile, close dialog on others screen
		onSubmitUpload: Function
	}
}
</script>

<style>

</style>
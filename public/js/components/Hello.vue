<style>
	
</style>
<template>
		<div>
			
			{{msg}}
			
			<Button>Default</Button>
			<Button type="primary">Primary</Button>
			<Button type="ghost">Ghost</Button>
			<Button type="dashed">Dashed</Button>
			<Button type="text">Text</Button>
			<br><br>
			<Button type="info">信息按钮</Button>
			<Button type="success">成功按钮</Button>
			<Button type="warning">警告按钮</Button>
			<Button type="error">错误按钮</Button>
			
			<br/><br/>
			
			<Button type="primary" shape="circle" icon="ios-search"></Button>
			<Button type="primary" icon="ios-search">搜索</Button>
			<Button type="primary" shape="circle" icon="ios-search">搜索</Button>
			<Button type="primary" shape="circle">圆角按钮</Button>
			<br><br>
			<Button type="ghost" shape="circle" icon="ios-search"></Button>
			<Button type="ghost" icon="ios-search">搜索</Button>
			<Button type="ghost" shape="circle" icon="ios-search">搜索</Button>
			<Button type="ghost" shape="circle">圆角按钮</Button>
		</div>
</template>
<script>
	
	
    export default {
        data () {
            return {
                msg:"hello Vue Component !"
            }
        }
    }
</script>

@if(Session::has('message'))
<div id="flash">
    <vue-alert message="{{ Session::get('message') }}"></vue-alert>
</div>
@endif
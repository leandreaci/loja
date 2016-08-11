@extends('layouts.app')

@section('content')
	
	<h1>Lista de Produtos</h1>

	<table class="table table-hover">
		<tr>
			<th>Produto</th>
			<th></th>
			<th></th>
		</tr>
		<tr>
		@foreach($produtos as $produto)
			<td>{{$produto->name}}</td>
			<td><a href="">Detalhes</td>
			<th><a href="">Excluir</th>
		@endforeach
		</tr>
	
	</table>
@stop
@extends('layouts.app')

@section('content')
	
	<h1>Lista de Produtos</h1>

	<div class="col-md-6">
		<div class="box box-default">
			<table class="table table-borded table-hover">
				<tr>
					<th>Produto</th>
					<th></th>
					<th></th>
				</tr>
				<tr>
				@foreach($produtos as $produto)
					<td>{{$produto->name}}</td>
					<td><a href="/produtos/{{$produto->id}}"><i class="fa fa-search-plus"></i></td>
					<th><a href="">Excluir</th>
				@endforeach
				</tr>
			
			</table>
		</div>
	</div>
@stop
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Produto;

class ProdutosController extends Controller
{
	public function __construct()
    {
        $this->middleware('auth');
    }



    public function index ()
    {
    	$produtos = Produto::all();

    	return view ('produtos.index', compact('produtos'));
    }

 	
 	public function show (Request $request, $id)
    {
    	$produto = Produto::find($id);

    	return view ('produtos.show', compact('produto'));
    }

}

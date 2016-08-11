<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{


 	public function produto ()
    {
    	return $this->belongsToMany(Produto::class);
    }
}

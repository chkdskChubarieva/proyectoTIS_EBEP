<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductBacklog extends Model
{
    use HasFactory;

    protected $table = 'product_backlogs';
    protected $primaryKey = 'ID_pb';

    protected $fillable = [
        'ID_empresa',
    ];

    public function grupoEmpresa()
    {
        return $this->belongsTo(GrupoEmpresa::class, 'ID_empresa');
    }

    public function historiasUsuario()
    {
        return $this->hasMany(HistoriaUsuario::class, 'ID_pb');
    }
}